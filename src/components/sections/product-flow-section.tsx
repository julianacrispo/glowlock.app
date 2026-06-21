/**
 * @ployComponent
 * @ployComponentId product-flow-section
 * @ployComponentType section
 * @ployComponentPattern feature
 * @ployComponentDescription Product walkthrough gallery showing the real Glowlock app screens (choose apps, shield, AI coach, insights, friends) as a numbered loop on the cream canvas. Each item renders a step label plus a full app screenshot served from /public/screens/*.png (pre-cropped to remove the baked-in caption while keeping the whole device). Items lay out as a centered flex-wrap so an odd final row (4 & 5) stays centered.
 */
type ProductFlowItemProps = {
  step: string;
  label: string;
  src: string;
  alt: string;
};

export const productFlowItems: ProductFlowItemProps[] = [
  {
    step: "01",
    label: "Choose",
    src: "/screens/choose.png",
    alt: "Glowlock screen to choose which apps pull you in most",
  },
  {
    step: "02",
    label: "Shield",
    src: "/screens/shield.png",
    alt: "Glowlock customizable shield that appears when you open a blocked app",
  },
  {
    step: "03",
    label: "Coach",
    src: "/screens/coach.png",
    alt: "Glowlock AI habit coach asking what you are trying to avoid right now",
  },
  {
    step: "04",
    label: "Insights",
    src: "/screens/insights.png",
    alt: "Glowlock insights showing presence score, app time, and the emotions behind your opens",
  },
  {
    step: "05",
    label: "Friends",
    src: "/screens/friends.png",
    alt: "Glowlock friends screen for sharing unlock time with people you choose",
  },
];

function ProductFlowItem({ step, label, src, alt }: ProductFlowItemProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="border-solid border-ploy-neutral-primary-s4 bg-ploy-background-secondary text-ploy-text-primary leading-snug font-bold text-xs w-9 h-9 flex justify-center items-center shadow-[2px_3px_0px_0px_oklab(0.850565_0.00277162_0.0179251)] rounded-lg bg-card border tabular-nums"
          data-ploy-component-type="card"
          data-ploy-surface-depth="deep"
        >
          {step}
        </div>
        <span className="text-ploy-text-secondary leading-snug font-bold text-xs tracking-[0.25em] uppercase block">
          {label}
        </span>
      </div>
      <img
        alt={alt}
        loading="lazy"
        width="800"
        height="927"
        src={src}
        className="w-full max-w-[20rem] h-auto"
      />
    </div>
  );
}

export default function ProductFlowSection({
  items = productFlowItems,
}: {
  items?: ProductFlowItemProps[];
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
            className="text-balance text-ploy-text-primary leading-[1.1] italic [font-weight:inherit] max-md:text-4xl max-md:leading-[1.1] md:text-6xl md:leading-[1.1]"
          >
            {"Most apps block you. This one rewires you."}
          </h2>
          <p className="text-ploy-text-secondary leading-relaxed max-w-xl mt-5 mx-auto max-md:text-sm max-md:leading-relaxed md:text-base md:leading-relaxed">
            {
              "Pick the apps that pull you in, design the shield that meets you there, and turn every unlock into a moment of intention you can actually learn from."
            }
          </p>
        </div>
        <div className="flex flex-wrap justify-center max-md:gap-12 md:gap-x-8 md:gap-y-14">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] flex justify-center"
            >
              <ProductFlowItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
