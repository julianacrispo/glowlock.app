import type { APIRoute } from "astro";

// SSR (must stay non-prerendered): runs server-side only, reads secrets from
// env, and never ships to the browser.
export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Signup {
  email: string;
  source: string;
  pageUrl: string;
  formName: string;
}

/**
 * Normalizes the two body shapes the front-end sends:
 *   - { email, source, pageUrl }                       (waitlist button)
 *   - { formName, pageUrl, data: { email, source } }   (submitForm helper)
 */
function parseSignup(body: Record<string, unknown>): Signup {
  const data = (body.data ?? body) as Record<string, unknown>;
  return {
    email: String(data.email ?? "").trim().toLowerCase(),
    source: String(data.source ?? body.source ?? "site"),
    pageUrl: String(body.pageUrl ?? data.pageUrl ?? ""),
    formName: String(body.formName ?? "glowlock-android-waitlist"),
  };
}

/**
 * Fan out a signup to whichever destinations are configured via env vars.
 * All destinations are optional and fail soft — a misconfigured or down
 * provider never blocks the user's success state. Set any of:
 *   WAITLIST_WEBHOOK_URL   POST the signup JSON anywhere (Zapier, Make,
 *                          Google Apps Script, Slack incoming webhook, ...)
 *   RESEND_API_KEY + WAITLIST_NOTIFY_EMAIL + WAITLIST_FROM_EMAIL
 *                          email yourself on each signup via Resend
 */
async function fanOut(signup: Signup): Promise<void> {
  const env = import.meta.env;
  const tasks: Promise<unknown>[] = [];

  const webhookUrl = env.WAITLIST_WEBHOOK_URL as string | undefined;
  if (webhookUrl) {
    tasks.push(
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signup),
      }).catch(() => {}),
    );
  }

  const resendKey = env.RESEND_API_KEY as string | undefined;
  const notifyEmail = env.WAITLIST_NOTIFY_EMAIL as string | undefined;
  const fromEmail = (env.WAITLIST_FROM_EMAIL as string | undefined) ?? notifyEmail;
  if (resendKey && notifyEmail && fromEmail) {
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: notifyEmail,
          subject: `New GlowLock waitlist signup: ${signup.email}`,
          text: `Email: ${signup.email}\nSource: ${signup.source}\nPage: ${signup.pageUrl}`,
        }),
      }).catch(() => {}),
    );
  }

  await Promise.allSettled(tasks);
}

export const POST: APIRoute = async ({ request }) => {
  const body = (await request.json().catch(() => ({}))) as Record<
    string,
    unknown
  >;
  const signup = parseSignup(body);

  if (!EMAIL_RE.test(signup.email)) {
    return new Response(JSON.stringify({ ok: false, error: "invalid_email" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Always log so a signup is recoverable from Vercel function logs even
  // before any provider above is wired up.
  console.log("[waitlist]", JSON.stringify(signup));

  await fanOut(signup);

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
