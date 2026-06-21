import type { ReactNode } from "react";
import HowItWorksSectionMockup from "../mockups/how-it-works-section-mockup";
import HowItWorksSectionMockup2 from "../mockups/how-it-works-section-mockup-2";
import HowItWorksSectionMockup3 from "../mockups/how-it-works-section-mockup-3";

/**
 * @ployComponent
 * @ployComponentId how-it-works-section
 * @ployComponentType section
 * @ployComponentPattern feature
 * @ployComponentDescription Three-step explanation of how the app works with short descriptions and visual mockups
 */
type HowItWorksSectionMockupItemProps = {
  stepLabel: string;
  title: string;
  description: string;
  component: ReactNode;
};

function HowItWorksSectionMockupItem({
  stepLabel,
  title,
  description,
  component,
}: HowItWorksSectionMockupItemProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="border-solid border-ploy-neutral-primary-s4 bg-ploy-background-secondary text-ploy-text-primary leading-snug font-bold text-sm w-10 h-10 flex justify-center items-center shadow-[2px_3px_0px_0px_oklab(0.850565_0.00277162_0.0179251)] rounded-lg bg-card border"
          data-ploy-component-type="card"
          data-ploy-surface-depth="deep"
        >
          {stepLabel}
        </div>
        <span className="text-ploy-text-secondary leading-snug font-bold text-xs tracking-[0.2em] uppercase block">
          {title}
        </span>
      </div>
      <p className="text-ploy-text-secondary leading-relaxed text-sm text-center max-w-[17.5rem] mb-4">
        {description}
      </p>
      <div className="w-full max-w-[17.5rem] relative mx-auto">
        <div
          className="border-solid border-ploy-neutral-primary-s4 bg-ploy-background-secondary relative shadow-lg p-2 rounded-[2rem] border-2 bg-card overflow-hidden"
          data-ploy-component-type="card"
          data-ploy-surface-depth="deep"
        >
          {component}
        </div>
      </div>
    </div>
  );
}

export const howItWorksSectionMockups: HowItWorksSectionMockupItemProps[] = [
  {
    stepLabel: "1",
    title: "PAUSE",
    description:
      "Your personalized shield creates the pause you need. Customize the prompts that remind you why you're here.",
    component: <HowItWorksSectionMockup />,
  },
  {
    stepLabel: "2",
    title: "UNDERSTAND",
    description:
      "See which emotions drive your scrolling. Unlock real insights into your patterns after your first week.",
    component: <HowItWorksSectionMockup2 />,
  },
  {
    stepLabel: "3",
    title: "REWIRE",
    description:
      "Get expert guidance from a habit coach grounded in psychology. Break the loop for good.",
    component: <HowItWorksSectionMockup3 />,
  },
];

export default function HowItWorksSection({
  items = howItWorksSectionMockups,
}: {
  items?: HowItWorksSectionMockupItemProps[];
}) {
  return (
    <section className="px-6 max-md:py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-md:mb-12 md:mb-16">
          <p className="text-ploy-text-secondary leading-snug text-xs tracking-[0.25em] uppercase mb-4">
            {"--- How It Works ---"}
          </p>
          <h2
            style={{
              fontFamily:
                "'Instrument Serif', 'Instrument Serif Fallback', Georgia, serif",
            }}
            className="text-balance text-ploy-text-primary italic [font-weight:inherit] max-md:leading-tight max-md:text-3xl md:leading-none md:text-5xl"
          >
            {"Built on what actually works in habit science"}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-md:gap-8 md:gap-6">
          {items.map((item, index) => (
            <HowItWorksSectionMockupItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
