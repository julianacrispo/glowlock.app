/**
 * @ployComponent
 * @ployComponentId stats-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Row of key metrics and usage statistics
 */
type ListItemProps = {
  text: string;
  text_1: string;
};

function ListItem({ text, text_1 }: ListItemProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-ploy-text-primary font-bold tabular-nums max-md:leading-tight max-md:text-3xl md:text-4xl">
        {text}
      </div>
      <span className="text-ploy-text-secondary tracking-[0.2em] uppercase block max-md:text-xs md:leading-snug md:text-xs">
        {text_1}
      </span>
    </div>
  );
}

export const statsSection: ListItemProps[] = [
  { text: "96+", text_1: "5-Star Reviews" },
  { text: "50,000+", text_1: "Scroll Sessions Blocked" },
  { text: "12,000+", text_1: "Shields Activated" },
  { text: "347", text_1: "Days of Life Saved" },
];

export default function StatsSection({
  items = statsSection,
}: {
  items?: ListItemProps[];
}) {
  return (
    <section className="px-6 max-md:py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="border-dashed border-ploy-neutral-primary-s4 h-px mb-12 border-t" />
        <div className="text-center grid gap-8 grid-cols-2 md:grid-cols-4">
          {items.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </div>
        <div className="border-dashed border-ploy-neutral-primary-s4 h-px mt-12 border-t" />
      </div>
    </section>
  );
}
