import HeroSectionIcon1 from "../svgs/hero-section-icon-1";
import HeroSectionIcon2 from "../svgs/hero-section-icon-2";
import HeroSectionIcon3 from "../svgs/hero-section-icon-3";
import WaitlistButton from "@/components/ui/waitlist-button";

/**
 * @ployComponent
 * @ployComponentId hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Hero section with large editorial headline, supporting copy, primary CTA, and social proof. Desktop uses a two-column split (copy left, real "shield" app screen right) so the product is visible in the fold; mobile keeps the centered editorial stack with the phone below.
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 max-md:pt-24 max-md:pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center lg:flex-row lg:items-center lg:gap-16">
        {/* Copy column */}
        <div className="flex max-w-xl flex-col items-center lg:items-start">
          <div className="mb-6">
            <img
              alt=""
              loading="eager"
              width="56"
              height="56"
              src="https://storage.googleapis.com/ployai/1128baac-0f0d-4b3b-aa46-b9e9e0069105/user/98534cdb-slurp-brain-icon.webp"
              className="w-14 overflow-clip"
            />
          </div>
          <h1 className="[font-weight:inherit] text-center max-w-2xl lg:text-left">
            <span
              style={{
                fontFamily:
                  "'Instrument Serif', 'Instrument Serif Fallback', Georgia, serif",
              }}
              className="text-balance text-ploy-text-primary leading-[1.1] italic block max-md:text-5xl max-md:leading-[1.1] md:max-lg:text-7xl md:max-lg:leading-[1.1] lg:text-7xl lg:leading-[1.05]"
            >
              {"The screen-time app that finally sticks."}
            </span>
          </h1>
          <p className="text-ploy-text-secondary leading-relaxed text-lg text-center max-w-lg mt-6 lg:text-left">
            {
              "GlowLock catches you the moment you reach for a habit and surfaces the feeling behind it. That awareness builds a pause that rewires the behavior — so change sticks where blockers fail."
            }
          </p>
          <div className="flex flex-col items-center gap-4 mt-10 lg:items-start">
            <a
              href="https://apps.apple.com/app/glowlock"
              className="bg-ploy-background-accent-primary text-ploy-button-primary-text leading-snug font-bold text-sm tracking-[0.15em] uppercase flex items-center gap-3 duration-150 ease-in-out px-8 py-4 rounded-lg group hover:scale-102 hover:bg-ploy-background-accent-primary"
              data-ploy-component-type="button"
              data-ploy-component-variant="primary"
            >
              <HeroSectionIcon1 />
              {"Start Your 7-Day Free Trial"}
            </a>
            <p className="text-ploy-text-secondary leading-snug text-sm">
              {"Not on iPhone?" + " "}
              <WaitlistButton source="hero" />
            </p>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <div aria-label="5 star rating" className="flex">
              <HeroSectionIcon2 />
              <HeroSectionIcon2 />
              <HeroSectionIcon2 />
              <HeroSectionIcon2 />
              <HeroSectionIcon3 />
            </div>
            <span className="text-ploy-text-secondary leading-snug text-xs tracking-[0.6px] uppercase block">
              {"96+ Five-Star Reviews"}
            </span>
          </div>
          <p className="text-ploy-text-secondary leading-snug text-xs tracking-[0.6px] mt-2">
            {"Former doomscrollers love us"}
          </p>
        </div>

        {/* Product column */}
        <div className="w-full max-w-[18rem] mt-12 shrink-0 lg:mt-0 lg:max-w-[22rem]">
          <img
            alt="Glowlock shield screen shown when you open a blocked app, with an option to open the app intentionally"
            loading="eager"
            width="516"
            height="688"
            src="https://storage.googleapis.com/ployai/1128baac-0f0d-4b3b-aa46-b9e9e0069105/user/d568ce5a-2bfbb638-5.png"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
