import clsx from 'clsx';
import type { ProjectTag } from '@/types/content';

export type ProjectFilter = 'All' | ProjectTag;

const filters: ProjectFilter[] = ['All', 'Web', 'Mobile', 'Platforms'];

interface ProjectFiltersProps {
  value: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
  total: number;
}

export const ProjectFilters = ({
  value,
  onChange,
  total,
}: ProjectFiltersProps) => (
  <div
    className="flex flex-wrap gap-1.5 motion-safe:animate-[rise_.9s_cubic-bezier(.2,.7,.2,1)_both]"
    style={{ animationDelay: '.15s' }}>
    {filters.map((filter) => (
      <button
        key={filter}
        type="button"
        onClick={() => onChange(filter)}
        className={clsx(
          'rounded-full px-4 py-2.5 text-[13px] font-semibold transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5',
          value === filter ? 'bg-ink text-white' : 'bg-white text-ink'
        )}>
        {filter === 'All' ? `All · ${total}` : filter}
      </button>
    ))}
  </div>
);
