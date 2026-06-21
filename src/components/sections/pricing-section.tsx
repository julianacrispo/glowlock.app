import HeroSectionIcon1 from "../svgs/hero-section-icon-1";

/**
 * @ployComponent
 * @ployComponentId pricing-section
 * @ployComponentType section
 * @ployComponentPattern pricing
 * @ployComponentDescription Two-plan pricing section for Glowlock — annual ($79.99/yr with 7-day free trial, highlighted as the dark inverse card) and monthly ($16.99/mo). Shares one feature list across both plans, links to the App Store.
 */
const SHARED_FEATURES: string[] = [
  "Unlimited app shields, fully customizable",
  "Open-with-intention check-ins",
  "7-day pattern insights & Presence Score",
  "AI habit coach, available anytime",
  "Friend accountability that stays private",
];

const APP_STORE_HREF = "https://apps.apple.com/app/id6757251908";

function FeatureList({ inverse = false }: { inverse?: boolean }) {
  return (
    <ul className="flex flex-col gap-3 mt-8">
      {SHARED_FEATURES.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className={`leading-none text-base mt-0.5 ${
              inverse ? "text-ploy-text-inverse" : "text-ploy-text-primary"
            }`}
          >
            {"✦"}
          </span>
          <span
            className={`leading-snug text-sm block ${
              inverse ? "text-ploy-text-inverse" : "text-ploy-text-secondary"
            }`}
          >
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="px-6 max-md:py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-md:mb-12 md:mb-16">
          <p className="text-ploy-text-secondary leading-snug text-xs tracking-[0.25em] uppercase mb-4">
            {"--- Pricing ---"}
          </p>
          <h2
            style={{
              fontFamily:
                "'Instrument Serif', 'Instrument Serif Fallback', Georgia, serif",
            }}
            className="text-balance text-ploy-text-primary leading-[1.1] italic [font-weight:inherit] max-md:text-4xl max-md:leading-[1.1] md:text-6xl md:leading-[1.1]"
          >
            {"One subscription. All of your time back."}
          </h2>
          <p className="text-ploy-text-secondary leading-relaxed max-w-md mt-5 mx-auto max-md:text-sm max-md:leading-relaxed md:text-base md:leading-relaxed">
            {"Try everything free for 7 days. Cancel anytime, no questions."}
          </p>
        </div>

        <div className="grid items-stretch grid-cols-1 gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {/* Annual — highlighted */}
          <div
            className="border-solid border-ploy-neutral-primary-s4 bg-ploy-background-inverse relative flex flex-col p-8 rounded-lg border shadow-[4px_5px_0px_0px_oklab(0.850565_0.00277162_0.0179251)]"
            data-ploy-component-type="card"
            data-ploy-surface-depth="deep"
          >
            <div className="flex items-center justify-between">
              <span className="text-ploy-text-inverse leading-snug font-bold text-xs tracking-[0.2em] uppercase block">
                {"Annual"}
              </span>
              <span className="border-solid border-ploy-border-inverse text-ploy-text-inverse leading-snug text-[0.65rem] tracking-[0.15em] uppercase px-3 py-1 rounded-full border block">
                {"Save 60%"}
              </span>
            </div>
            <div className="flex items-end gap-2 mt-6">
              <span
                style={{
                  fontFamily:
                    "'Instrument Serif', 'Instrument Serif Fallback', Georgia, serif",
                }}
                className="text-ploy-text-inverse leading-none italic text-6xl"
              >
                {"$79.99"}
              </span>
              <span className="text-ploy-text-inverse-secondary leading-snug text-sm mb-2 block">
                {"/ year"}
              </span>
            </div>
            <p className="text-ploy-text-inverse-secondary leading-snug text-xs mt-2">
              {"Just $6.67/mo, billed annually — starts with a 7-day free trial."}
            </p>
            <FeatureList inverse />
            <a
              href={APP_STORE_HREF}
              className="bg-ploy-background-primary text-ploy-text-primary leading-snug font-bold text-sm tracking-[0.15em] uppercase flex justify-center items-center gap-3 duration-150 ease-in-out px-8 py-4 rounded-lg mt-8 hover:scale-102"
              data-ploy-component-type="button"
              data-ploy-component-variant="primary"
            >
              <HeroSectionIcon1 />
              {"Start 7-Day Free Trial"}
            </a>
          </div>

          {/* Monthly */}
          <div
            className="border-solid border-ploy-neutral-primary-s4 bg-ploy-background-primary relative flex flex-col p-8 rounded-lg border"
            data-ploy-component-type="card"
            data-ploy-surface-depth="deep"
          >
            <span className="text-ploy-text-secondary leading-snug font-bold text-xs tracking-[0.2em] uppercase block">
              {"Monthly"}
            </span>
            <div className="flex items-end gap-2 mt-6">
              <span
                style={{
                  fontFamily:
                    "'Instrument Serif', 'Instrument Serif Fallback', Georgia, serif",
                }}
                className="text-ploy-text-primary leading-none italic text-6xl"
              >
                {"$16.99"}
              </span>
              <span className="text-ploy-text-secondary leading-snug text-sm mb-2 block">
                {"/ month"}
              </span>
            </div>
            <p className="text-ploy-text-secondary leading-snug text-xs mt-2">
              {"Flexible month-to-month. Cancel whenever you like."}
            </p>
            <FeatureList />
            <a
              href={APP_STORE_HREF}
              className="border-solid border-ploy-button-secondary-border bg-ploy-background-primary text-ploy-text-primary leading-snug font-bold text-sm tracking-[0.15em] uppercase flex justify-center items-center gap-3 duration-150 ease-in-out px-8 py-4 rounded-lg border mt-8 hover:scale-102"
              data-ploy-component-type="button"
              data-ploy-component-variant="secondary"
            >
              {"Get Monthly"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
