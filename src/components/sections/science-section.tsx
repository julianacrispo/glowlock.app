import type { ReactNode } from "react";
import ScienceSectionIcon1 from "../svgs/science-section-icon-1";
import ScienceSectionIcon2 from "../svgs/science-section-icon-2";
import ScienceSectionIcon3 from "../svgs/science-section-icon-3";

/**
 * @ployComponent
 * @ployComponentId science-section
 * @ployComponentType section
 * @ployComponentPattern feature
 * @ployComponentDescription Three feature cards explaining the habit science behind the product
 */
type ScienceSectionIconItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

function ScienceSectionIconItem({
  icon,
  title,
  description,
}: ScienceSectionIconItemProps) {
  return (
    <div className="border-solid border-ploy-neutral-primary-s4 bg-ploy-background-primary text-center flex flex-col items-center gap-3 p-6 rounded-lg border">
      <div className="border-solid border-ploy-neutral-primary-s4 bg-ploy-background-secondary w-12 h-12 flex justify-center items-center shadow-[2px_3px_0px_0px_oklab(0.850565_0.00277162_0.0179251)] rounded-lg border">
        {icon}
      </div>
      <h3 className="text-ploy-text-primary leading-snug font-bold text-xs tracking-[0.2em] uppercase">
        {title}
      </h3>
      <p className="text-ploy-text-secondary leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

export const scienceSectionIcons: ScienceSectionIconItemProps[] = [
  {
    icon: <ScienceSectionIcon1 />,
    title: "The Pause",
    description:
      "A brief interruption before compulsive action is all it takes to break the autopilot loop. Your shield creates that moment.",
  },
  {
    icon: <ScienceSectionIcon2 />,
    title: "Real Insights",
    description:
      "See which emotions drive you to scroll. When you understand the why, you can finally change the behavior.",
  },
  {
    icon: <ScienceSectionIcon3 />,
    title: "Identity Shift",
    description:
      "Your shield reinforces who you want to be. Over time, “I don't scroll” becomes part of your identity — not a rule you force.",
  },
];

export default function ScienceSection({
  items = scienceSectionIcons,
}: {
  items?: ScienceSectionIconItemProps[];
}) {
  return (
    <section className="bg-ploy-background-secondary px-6 bg-card max-md:py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-md:mb-12 md:mb-16">
          <p className="text-ploy-text-secondary leading-snug text-xs tracking-[0.25em] uppercase mb-4">
            {"--- The Science ---"}
          </p>
          <h2
            style={{
              fontFamily:
                "'Instrument Serif', 'Instrument Serif Fallback', Georgia, serif",
            }}
            className="text-balance text-ploy-text-primary leading-[1.15] italic [font-weight:inherit] max-md:text-3xl max-md:leading-[1.15] md:text-5xl md:leading-[1.15]"
          >
            {"Willpower doesn't work. Systems do."}
          </h2>
          <p className="text-ploy-text-secondary leading-relaxed max-w-lg mt-4 mx-auto max-md:text-sm max-md:leading-relaxed md:text-base md:leading-relaxed">
            {
              "GlowLock is built on proven principles of habit formation psychology — implementation intentions, identity reinforcement, and the power of a pause before compulsive action."
            }
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {items.map((item, index) => (
            <ScienceSectionIconItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
