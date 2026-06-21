import type { APIRoute } from "astro";

// SSR (must stay non-prerendered) — runs server-side only; this source never
// ships to the browser, so the webhook key below stays off the client.
export const prerender = false;

// Dedicated GlowLock waitlist webhook → triggers the
// "GlowLock Waitlist → Slack #leads" ploybook.
const WEBHOOK_URL = "https://ploy.ai/api/v1/webhook/3bjeyeq4kf1hzsa7";
const WEBHOOK_KEY = "sk_ploy_webhookNjupJUnniHetDtfGPwbcDNYADjtJDTunoRBoxntC";

/**
 * Forwards a GlowLock Android-waitlist signup to the Ploy webhook, which posts
 * it to Slack #leads. Fails soft: the form's own submitForm() still persists
 * the signup in Ploy regardless of whether this alert succeeds.
 */
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json().catch(() => ({}))) as Record<
      string,
      unknown
    >;

    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${WEBHOOK_KEY}`,
      },
      body: JSON.stringify({
        email: String(body.email ?? ""),
        source: String(body.source ?? ""),
        pageUrl: String(body.pageUrl ?? ""),
      }),
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ ok: false }), { status: 200 });
  }
};
