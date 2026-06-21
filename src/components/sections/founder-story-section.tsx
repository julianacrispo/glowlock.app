/**
 * @ployComponent
 * @ployComponentId founder-story-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Personal founder introduction with portrait and story paragraphs
 */
type ListItemProps = {
  className: string;
  text: string;
};

function ListItem({ className, text }: ListItemProps) {
  return <p className={className}>{text}</p>;
}

export const founderStorySection: ListItemProps[] = [
  {
    className: "mb-4",
    text: "I know what it feels like to lose hours to scrolling and feel worse after.",
  },
  {
    className: "mb-4",
    text: "I built GlowLock to help me break that loop and rewire my brain toward happiness instead.",
  },
  {
    className: "",
    text: "It changed my life for the better, and I hope it is the same for you.",
  },
];

export default function FounderStorySection({
  items = founderStorySection,
}: {
  items?: ListItemProps[];
}) {
  return (
    <section className="px-6 max-md:py-20 md:py-28">
      <div className="max-w-2xl mx-auto">
        <div className="flex max-md:items-center max-md:gap-8 max-md:flex-col md:items-start md:gap-12 md:flex-row">
          <div className="relative shrink-0 rounded-2xl max-md:w-56 max-md:h-56 md:w-64 md:h-64 overflow-hidden">
            <img
              alt="Juliana, founder of GlowLock"
              loading="eager"
              src="https://storage.googleapis.com/ployai/1128baac-0f0d-4b3b-aa46-b9e9e0069105/user/fbb33a75-slurp-juliana.webp"
              className="w-full h-full absolute object-cover object-[50%_0%] inset-0 overflow-clip"
            />
          </div>
          <div className="max-md:text-center md:text-left">
            <p
              style={{
                fontFamily:
                  "'Instrument Serif', 'Instrument Serif Fallback', Georgia, serif",
              }}
              className="text-ploy-text-primary leading-tight italic text-3xl"
            >
              {"Hi! I'm Juliana."}
            </p>
            <div className="text-ploy-text-secondary leading-relaxed mt-4 max-md:text-sm max-md:leading-relaxed md:text-base md:leading-relaxed">
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
            </div>
            <p
              style={{
                fontFamily:
                  "'Instrument Serif', 'Instrument Serif Fallback', Georgia, serif",
              }}
              className="text-ploy-text-primary leading-normal italic mt-6"
            >
              {"See you on the inside."}
              <br />
              {"Juliana"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
