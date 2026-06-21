import { useEffect, useRef, useState } from "react";
import { submitForm } from "@/lib/ploy-forms/submit-form";

/**
 * @ployComponent
 * @ployComponentId waitlist-button
 * @ployComponentType component
 * @ployComponentPattern button
 * @ployComponentDescription Inline trigger + modal that captures an email for the GlowLock Android waitlist. Submits the signup to the site's own /api/waitlist endpoint, which fans out to whatever provider is configured via env vars (webhook, Resend email, ...). Brand-matched: cream panel, Instrument Serif heading, ink CTA. Pass `source` to tag where the signup came from; `children` overrides the trigger label.
 */
const SERIF =
  "'Instrument Serif', 'Instrument Serif Fallback', Georgia, serif";

interface Props {
  source?: string;
  children?: React.ReactNode;
}

export default function WaitlistButton({
  source = "site",
  children = "Join the Android waitlist →",
}: Props) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle",
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    try {
      await submitForm("glowlock-android-waitlist", { email, source, pageUrl });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  function close() {
    setOpen(false);
    // Reset shortly after the panel unmounts so it's fresh next open.
    setTimeout(() => {
      setEmail("");
      setStatus("idle");
    }, 200);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{ fontVariationSettings: "inherit" }}
        className="[color:inherit] [font-weight:inherit] underline transition-colors p-0 hover:text-ploy-text-primary"
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Join the Android waitlist"
        >
          <div
            className="absolute inset-0 bg-ploy-background-inverse/40"
            onClick={close}
            aria-hidden="true"
          />
          <div className="border-solid border-ploy-neutral-primary-s4 bg-ploy-background-primary relative w-full max-w-sm p-8 rounded-lg border shadow-[4px_5px_0px_0px_oklab(0.850565_0.00277162_0.0179251)]">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 text-ploy-text-secondary leading-none text-lg p-0 hover:text-ploy-text-primary"
            >
              {"✕"}
            </button>

            {status === "done" ? (
              <div className="text-center">
                <p
                  style={{ fontFamily: SERIF }}
                  className="text-ploy-text-primary leading-[1.1] italic text-4xl"
                >
                  {"You're on the list."}
                </p>
                <p className="text-ploy-text-secondary leading-relaxed text-sm mt-4">
                  {
                    "We'll email you the moment GlowLock lands on Android. Thanks for your patience."
                  }
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="bg-ploy-background-accent-primary text-ploy-button-primary-text leading-snug font-bold text-sm tracking-[0.15em] uppercase inline-flex justify-center items-center duration-150 ease-in-out px-8 py-4 rounded-lg mt-8 hover:scale-102"
                >
                  {"Done"}
                </button>
              </div>
            ) : (
              <>
                <p className="text-ploy-text-secondary leading-snug text-xs tracking-[0.25em] uppercase mb-3">
                  {"--- Android Waitlist ---"}
                </p>
                <h2
                  style={{ fontFamily: SERIF }}
                  className="text-balance text-ploy-text-primary leading-[1.1] italic text-4xl"
                >
                  {"Be first on Android."}
                </h2>
                <p className="text-ploy-text-secondary leading-relaxed text-sm mt-3">
                  {
                    "GlowLock is iOS-only today. Drop your email and we'll let you know the second the Android app is ready."
                  }
                </p>
                <form onSubmit={handleSubmit} className="mt-6">
                  <input
                    ref={inputRef}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    autoComplete="email"
                    className="border-solid border-ploy-neutral-primary-s4 bg-ploy-background-primary text-ploy-text-primary placeholder:text-ploy-text-secondary w-full text-base px-4 py-3 rounded-lg border outline-none focus:border-ploy-text-primary"
                  />
                  {status === "error" && (
                    <p className="text-ploy-text-secondary leading-snug text-xs mt-2">
                      {"Something went wrong. Please try again."}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-ploy-background-accent-primary text-ploy-button-primary-text leading-snug font-bold text-sm tracking-[0.15em] uppercase w-full flex justify-center items-center duration-150 ease-in-out px-8 py-4 rounded-lg mt-4 hover:scale-102 disabled:opacity-60"
                  >
                    {status === "submitting"
                      ? "Joining..."
                      : "Join the waitlist"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
