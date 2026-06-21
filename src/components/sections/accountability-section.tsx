import AccountabilitySectionMockup from "../mockups/accountability-section-mockup";
import AccountabilitySectionIcon1 from "../svgs/accountability-section-icon-1";

/**
 * @ployComponent
 * @ployComponentId accountability-section
 * @ployComponentType section
 * @ployComponentPattern feature
 * @ployComponentDescription Accountability-focused section with benefits list and product screenshot
 */
type AccountabilitySectionIconItemProps = {
  text: string;
};

function AccountabilitySectionIconItem({
  text,
}: AccountabilitySectionIconItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="border-solid border-ploy-neutral-primary-s4 bg-ploy-background-secondary w-7 h-7 flex shrink-0 justify-center items-center shadow-[1px_2px_0px_0px_oklab(0.850565_0.00277162_0.0179251)] rounded-md bg-card border"
        data-ploy-component-type="card"
        data-ploy-surface-depth="deep"
      >
        <AccountabilitySectionIcon1 />
      </div>
      <span className="text-ploy-text-primary leading-snug text-sm block">
        {text}
      </span>
    </div>
  );
}

export const accountabilitySectionIcons: AccountabilitySectionIconItemProps[] =
  [
    { text: "Share your unlock time with friends you choose" },
    { text: "Chat with your AI habit coach anytime" },
    { text: "Journal entries and total phone use stay private" },
  ];

export default function AccountabilitySection({
  items = accountabilitySectionIcons,
}: {
  items?: AccountabilitySectionIconItemProps[];
}) {
  return (
    <section className="px-6 max-md:py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 max-lg:gap-12 lg:gap-16">
          <div className="flex flex-col gap-6">
            <p className="text-ploy-text-secondary leading-snug text-xs tracking-[0.25em] uppercase">
              {"--- Accountability ---"}
            </p>
            <h2
              style={{
                fontFamily:
                  "'Instrument Serif', 'Instrument Serif Fallback', Georgia, serif",
              }}
              className="text-balance text-ploy-text-primary leading-[1.15] italic [font-weight:inherit] max-md:text-3xl max-md:leading-[1.15] md:text-5xl md:leading-[1.15]"
            >
              {"You don't have to do it alone"}
            </h2>
            <p className="text-ploy-text-secondary leading-relaxed max-w-md max-md:text-sm max-md:leading-relaxed md:text-base md:leading-relaxed">
              {
                "Invite a few people you trust. They only see how much time you unlocked your blocked apps today — and when you need more than a nudge, your AI habit coach is one tap away."
              }
            </p>
            <div className="flex flex-col gap-3 mt-4">
              {items.map((item, index) => (
                <AccountabilitySectionIconItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="w-full max-w-xs relative ml-auto max-lg:mr-auto lg:mr-0">
            <img
              alt="Glowlock friends screen showing how much time friends unlocked their blocked apps today"
              loading="lazy"
              width="516"
              height="688"
              src="https://storage.googleapis.com/ployai/1128baac-0f0d-4b3b-aa46-b9e9e0069105/user/91c759b3-2ffa1ab0-2.png"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
