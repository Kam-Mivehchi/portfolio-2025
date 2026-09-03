import { useState } from 'react';
import { Seo } from '@/components/Seo';
import { ProjectCard } from '@/components/projects/ProjectCard';
import {
  ProjectFilter,
  ProjectFilters,
} from '@/components/projects/ProjectFilters';
import { projects } from '@/constants/projects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.tag === filter);

  return (
    <div className="mx-auto max-w-page">
      <Seo title="Projects | Kamyar Mivehchi" />
      <div className="flex flex-col gap-6 px-6 pb-6 pt-14 md:flex-row md:items-end md:justify-between lg:px-14">
        <h1 className="text-[48px] font-extrabold leading-none tracking-[-0.04em] motion-safe:animate-[rise_.9s_cubic-bezier(.2,.7,.2,1)_both] md:text-[72px]">
          Projects
        </h1>
        <ProjectFilters
          value={filter}
          onChange={setFilter}
          total={projects.length}
        />
      </div>
      <div
        key={filter}
        className="grid grid-cols-1 gap-5 px-6 pb-24 lg:grid-cols-2 lg:px-14">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
