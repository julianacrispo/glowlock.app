/**
 * @ployComponent
 * @ployComponentId footer
 * @ployComponentType component
 * @ployComponentPattern footer
 * @ployComponentDescription Footer with logo, short description, and policy/support links
 */
type LinkItemProps = {
  href: string;
  text: string;
};

function LinkItem({ href, text }: LinkItemProps) {
  return (
    <a
      href={href}
      className="[color:inherit] uppercase block transition-colors hover:text-ploy-text-primary"
    >
      {text}
    </a>
  );
}

export const links: LinkItemProps[] = [
  { href: "https://www.glowlock.app/privacy", text: "Privacy" },
  { href: "https://www.glowlock.app/terms", text: "Terms" },
  { href: "https://www.glowlock.app/support", text: "Support" },
];

export default function Footer({ items = links }: { items?: LinkItemProps[] }) {
  return (
    <footer className="border-solid border-ploy-neutral-primary-s4 px-6 py-10 border-t">
      <div className="text-center max-w-6xl flex flex-col items-center gap-6 mx-auto">
        <div className="flex items-center gap-2">
          <img
            alt=""
            loading="eager"
            width="20"
            height="20"
            src="https://storage.googleapis.com/ployai/1128baac-0f0d-4b3b-aa46-b9e9e0069105/user/98534cdb-slurp-brain-icon.webp"
            className="w-5 opacity-70 overflow-clip"
          />
          <span className="text-ploy-text-secondary font-bold text-xs tracking-[0.25em] uppercase block">
            {"GlowLock"}
          </span>
        </div>
        <p className="text-ploy-text-secondary leading-relaxed text-xs max-w-sm">
          {
            "Made for the ones who want their attention back. Designed with analog vibes in mind."
          }
        </p>
        <div className="text-ploy-text-secondary text-xs tracking-[2px] uppercase flex items-center gap-6">
          {items.map((item, index) => (
            <LinkItem key={index} {...item} />
          ))}
        </div>
        <p className="text-ploy-text-secondary/60 text-xs tracking-wide uppercase">
          {"2026 Metrics Health International. All Rights Reserved."}
        </p>
      </div>
    </footer>
  );
}
