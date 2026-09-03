interface MarqueeProps {
  items: string[];
}

const MarqueeList = ({ items, hidden }: { items: string[]; hidden?: boolean }) => (
  <div
    aria-hidden={hidden || undefined}
    className="flex shrink-0 gap-14 whitespace-nowrap pr-14 text-[15px] font-bold text-stone-600">
    {items.map((item, i) => (
      <span key={`${item}-${i}`} className="contents">
        <span>{item}</span>
        <span>·</span>
      </span>
    ))}
  </div>
);

export const Marquee = ({ items }: MarqueeProps) => (
  <div className="overflow-hidden border-y border-line py-[18px] [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
    <div className="flex w-max motion-safe:animate-marquee">
      <MarqueeList items={items} />
      <MarqueeList items={items} hidden />
    </div>
  </div>
);
