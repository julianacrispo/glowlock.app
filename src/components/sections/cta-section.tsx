import HeroSectionIcon1 from "../svgs/hero-section-icon-1";
import CtaSectionIcon1 from "../svgs/cta-section-icon-1";
import TestimonialSectionIcon2 from "../svgs/testimonial-section-icon-2";

/**
 * @ployComponent
 * @ployComponentId cta-section
 * @ployComponentType section
 * @ployComponentPattern cta
 * @ployComponentDescription Final call-to-action section with headline, download button, and waitlist link
 */
export default function CtaSection() {
  return (
    <section className="px-6 max-md:py-20 md:py-32">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-8">
          <img
            alt=""
            loading="eager"
            width="48"
            height="48"
            src="https://www.glowlock.app/brain-icon.png"
            className="w-12 opacity-30 overflow-clip"
          />
        </div>
        <h2
          style={{
            fontFamily:
              "'Instrument Serif', 'Instrument Serif Fallback', Georgia, serif",
          }}
          className="text-balance text-ploy-text-primary leading-[1.1] italic [font-weight:inherit] max-md:text-4xl max-md:leading-[1.1] md:text-6xl md:leading-[1.1]"
        >
          {"Stop scrolling on autopilot."}
        </h2>
        <p className="text-ploy-text-secondary leading-relaxed max-w-md mt-4 mx-auto max-md:text-sm max-md:leading-relaxed md:text-base md:leading-relaxed">
          {
            "Join hundreds who broke the compulsive scroll loop and took back their time."
          }
        </p>
        <div className="flex flex-col items-center gap-4 mt-8">
          <a
            href="https://apps.apple.com/app/glowlock"
            className="bg-ploy-background-accent-primary text-ploy-button-primary-text leading-snug font-bold text-sm tracking-[0.15em] uppercase flex items-center gap-3 duration-150 ease-in-out px-10 py-5 rounded-lg group hover:scale-102 hover:bg-ploy-background-accent-primary"
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
        <div className="flex justify-center items-center gap-2 mt-6">
          <div className="flex">
            {Array.from({
              length: 4,
            }).map((_, index) => (
              <CtaSectionIcon1 key={index} />
            ))}
            <TestimonialSectionIcon2 />
          </div>
          <span className="text-ploy-text-secondary leading-snug text-xs tracking-[0.6px] block">
            {"96+ Five-Star Reviews"}
          </span>
        </div>
        <p className="text-ploy-text-secondary leading-snug text-xs tracking-[0.6px] mt-1">
          {"Former doomscrollers love us"}
        </p>
      </div>
    </section>
  );
}
