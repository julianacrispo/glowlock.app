import HeroSectionIcon1 from "../svgs/hero-section-icon-1";
import HeroSectionIcon2 from "../svgs/hero-section-icon-2";
import HeroSectionIcon3 from "../svgs/hero-section-icon-3";

/**
 * @ployComponent
 * @ployComponentId hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Hero section with large headline, supporting copy, primary CTA, and social proof
 */
export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center px-6 max-md:pt-24 max-md:pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute flex justify-center opacity-20 top-12 inset-x-0"
      >
        <div className="bg-[rgb(212,205,193)] w-full h-px max-w-2xl" />
      </div>
      <div className="mb-6">
        <img
          alt=""
          loading="eager"
          width="80"
          height="80"
          src="https://storage.googleapis.com/ployai/1128baac-0f0d-4b3b-aa46-b9e9e0069105/user/98534cdb-slurp-brain-icon.webp"
          className="w-20 overflow-clip"
        />
      </div>
      <h1 className="[font-weight:inherit] text-center max-w-4xl">
        <span
          style={{
            fontFamily:
              "'Instrument Serif', 'Instrument Serif Fallback', Georgia, serif",
          }}
          className="text-balance text-ploy-text-primary leading-[1.1] italic block max-md:text-5xl max-md:leading-[1.1] md:max-lg:text-7xl md:max-lg:leading-[1.1] lg:text-8xl lg:leading-[1.1]"
        >
          {"Understand why you scroll."}
        </span>
        <span
          style={{
            fontFamily:
              "'Instrument Serif', 'Instrument Serif Fallback', Georgia, serif",
          }}
          className="text-balance text-ploy-text-primary leading-tight italic block mt-2 max-md:text-3xl max-md:leading-tight md:max-lg:text-4xl md:max-lg:leading-tight lg:text-5xl lg:leading-tight"
        >
          {"Then change it."}
        </span>
      </h1>
      <p className="text-ploy-text-secondary leading-relaxed text-lg text-center max-w-lg mt-6">
        {
          "GlowLock shields you from compulsive scrolling, reveals the emotions driving your habits, and helps you build the pause that rewires your behavior."
        }
      </p>
      <div className="flex flex-col items-center gap-4 mt-10">
        <a
          href="https://apps.apple.com/app/glowlock"
          className="bg-ploy-background-accent-primary text-ploy-button-primary-text leading-snug font-bold text-sm tracking-[0.15em] uppercase flex items-center gap-3 duration-150 ease-in-out px-8 py-4 rounded-lg group hover:scale-102 hover:bg-ploy-background-accent-primary"
          data-ploy-component-type="button"
          data-ploy-component-variant="primary"
        >
          <HeroSectionIcon1 />
          {"Get It on iOS"}
        </a>
        <p className="text-ploy-text-secondary leading-snug text-sm">
          {"Not on iPhone?" + " "}
          <button
            style={{ fontVariationSettings: "inherit" }}
            className="[color:inherit] [font-weight:inherit] underline transition-colors p-0 hover:text-ploy-text-primary"
          >
            {"Join the Android waitlist →"}
          </button>
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
      <div className="w-full max-w-[20rem] mt-14">
        <img
          alt="Glowlock shield screen shown when you open a blocked app, with an option to open the app intentionally"
          loading="eager"
          width="516"
          height="688"
          src="https://storage.googleapis.com/ployai/1128baac-0f0d-4b3b-aa46-b9e9e0069105/user/d568ce5a-2bfbb638-5.png"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
