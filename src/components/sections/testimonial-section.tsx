import TestimonialSectionIcon1 from "../svgs/testimonial-section-icon-1";
import TestimonialSectionIcon2 from "../svgs/testimonial-section-icon-2";

/**
 * @ployComponent
 * @ployComponentId testimonial-section
 * @ployComponentType section
 * @ployComponentPattern testimonials
 * @ployComponentDescription Customer reviews section with star rating and six testimonial cards
 */
type TestimonialSectionIconItemProps = {
  text: string;
  text_1: string;
};

function TestimonialSectionIconItem({
  text,
  text_1,
}: TestimonialSectionIconItemProps) {
  return (
    <div className="border-solid border-ploy-neutral-primary-s4 bg-ploy-background-primary flex flex-col gap-3 p-6 rounded-lg border">
      <div aria-label="5 stars" className="flex gap-0.5">
        <TestimonialSectionIcon2 />
        <TestimonialSectionIcon2 />
        <TestimonialSectionIcon2 />
        <TestimonialSectionIcon2 />
        <TestimonialSectionIcon2 />
      </div>
      <p className="text-ploy-text-primary leading-relaxed text-sm">{text}</p>
      <div className="border-solid border-ploy-neutral-primary-s4 mt-auto pt-3 border-t">
        <span className="text-ploy-text-secondary leading-snug text-xs tracking-[0.15em] uppercase">
          {text_1}
        </span>
      </div>
    </div>
  );
}

export const testimonialSectionIcons: TestimonialSectionIconItemProps[] = [
  {
    text: '"I used to open Instagram 40+ times a day without thinking. The shield makes me pause and ask myself why. My screen time dropped by half."',
    text_1: "Sarah M.",
  },
  {
    text: "\"The insights blew my mind. I didn't realize I scroll most when I'm anxious. Now I catch it before it happens.\"",
    text_1: "Jake T.",
  },
  {
    text: '"My screen time dropped by 3 hours in the first week. The customizable shield messages actually make me think twice."',
    text_1: "Priya K.",
  },
  {
    text: '"It is not just an app blocker. It rewires how you think about picking up your phone. My kids and I do it together now."',
    text_1: "Marcus L.",
  },
  {
    text: '"The habit coach asked me what I was avoiding and it hit me. It helped me see my patterns in a way I never had before. Love it."',
    text_1: "Emily R.",
  },
  {
    text: '"Adding my friends for accountability was the game changer. Knowing they can see my unlock time keeps me honest."',
    text_1: "David W.",
  },
];

export default function TestimonialSection({
  items = testimonialSectionIcons,
}: {
  items?: TestimonialSectionIconItemProps[];
}) {
  return (
    <section className="bg-ploy-background-secondary px-6 bg-card max-md:py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <p className="text-ploy-text-secondary leading-snug text-xs tracking-[0.25em] uppercase mb-4">
            {"--- Reviews ---"}
          </p>
          <h2
            style={{
              fontFamily:
                "'Instrument Serif', 'Instrument Serif Fallback', Georgia, serif",
            }}
            className="text-balance text-ploy-text-primary italic [font-weight:inherit] max-md:leading-tight max-md:text-3xl md:leading-none md:text-5xl"
          >
            {"96+ Five-Star Reviews"}
          </h2>
        </div>
        <div className="flex justify-center items-center gap-3 max-md:mb-12 md:mb-16">
          <div className="flex gap-0.5">
            {Array.from({
              length: 5,
            }).map((_, index) => (
              <TestimonialSectionIcon1 key={index} />
            ))}
          </div>
          <span className="text-ploy-text-secondary leading-snug text-sm block">
            {"Former doomscrollers love us"}
          </span>
        </div>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:max-lg:grid-cols-[repeat(2,minmax(0px,1fr))]">
          {items.map((item, index) => (
            <TestimonialSectionIconItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
