import { Reveal } from '@/components/ui/Reveal';
import { tools } from '@/constants/tools';

export const ToolsCard = () => (
  <Reveal className="mt-[72px]">
    <div className="flex flex-wrap gap-2 rounded-[28px] bg-white p-8">
      <div className="mb-2 w-full text-xs font-bold uppercase tracking-[.08em] text-stone-400">
        Tools I reach for
      </div>
      {tools.map((tool) => (
        <span
          key={tool}
          className="rounded-full bg-cream px-4 py-[9px] text-sm font-semibold transition-[background-color,color,transform] duration-300 ease-pop hover:-translate-y-[3px] hover:bg-ink hover:text-white">
          {tool}
        </span>
      ))}
    </div>
  </Reveal>
);
