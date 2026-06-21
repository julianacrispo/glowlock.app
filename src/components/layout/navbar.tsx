import NavbarIcon1 from "../svgs/navbar-icon-1";

/**
 * @ployComponent
 * @ployComponentId navbar
 * @ployComponentType component
 * @ployComponentPattern navbar
 * @ployComponentDescription Top navigation bar with the GlowLock logo and iOS download button
 */
export default function Navbar() {
  return (
    <header className="border-solid border-ploy-neutral-primary-s4 bg-ploy-background-primary/90 fixed z-50 backdrop-blur-md duration-300 ease-in-out border-b top-0 inset-x-0">
      <nav className="max-w-6xl flex justify-between items-center mx-auto px-6 py-4">
        <div className="flex items-center gap-2">
          <img
            alt=""
            loading="eager"
            width="24"
            height="24"
            src="https://storage.googleapis.com/ployai/1128baac-0f0d-4b3b-aa46-b9e9e0069105/user/98534cdb-slurp-brain-icon.webp"
            className="w-6 overflow-clip"
          />
          <span
            style={{
              fontFamily:
                "'Instrument Serif', 'Instrument Serif Fallback', Georgia, serif",
            }}
            className="text-ploy-text-primary leading-normal italic text-lg block"
          >
            {"GlowLock"}
          </span>
        </div>
        <a
          href="https://apps.apple.com/app/glowlock"
          className="bg-ploy-background-inverse text-ploy-text-on-accent-primary font-bold text-xs tracking-[0.15em] uppercase flex items-center gap-2 duration-150 ease-in-out px-4 py-2 rounded-lg hover:scale-102 hover:bg-ploy-background-inverse"
        >
          <NavbarIcon1 />
          <span className="uppercase max-md:hidden md:block">Get on iOS</span>
          <span className="uppercase max-md:block md:hidden">iOS</span>
        </a>
      </nav>
    </header>
  );
}
