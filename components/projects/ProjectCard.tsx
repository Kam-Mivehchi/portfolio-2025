import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import type { Project } from '@/types/content';

const CardShell = ({
  project,
  index,
  children,
}: {
  project: Project;
  index: number;
  children: ReactNode;
}) => {
  const className =
    'group block rounded-[32px] bg-white p-4 transition-[transform,box-shadow] duration-500 ease-hover hover:-translate-y-1.5 hover:shadow-lift motion-safe:animate-[pop_.8s_cubic-bezier(.2,.7,.2,1)_both]';
  const style = { animationDelay: `${index * 0.07}s` };
  return project.caseStudy ? (
    <Link href={`/projects/${project.slug}`} className={className} style={style}>
      {children}
    </Link>
  ) : (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}>
      {children}
    </a>
  );
};

export const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <CardShell project={project} index={index}>
    <div
      className="relative h-[260px] overflow-hidden rounded-[20px]"
      style={{ backgroundColor: project.tint }}>
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="(max-width: 1024px) 100vw, 580px"
        className="object-cover object-top transition-transform duration-700 ease-hover group-hover:scale-105"
        placeholder="blur"
      />
      <span className="absolute left-3.5 top-3.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold">
        {project.host}
      </span>
    </div>
    <div className="flex items-start justify-between gap-5 px-3 pb-2.5 pt-[22px]">
      <div>
        <div className="text-2xl font-extrabold tracking-[-0.02em]">
          {project.name}
        </div>
        <div className="mt-1.5 text-[15px] leading-[1.45] text-stone-600">
          {project.blurb}
        </div>
      </div>
      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-ink text-lg text-white transition-[transform,background-color] duration-500 ease-pop group-hover:rotate-45 group-hover:scale-110 group-hover:bg-coral">
        ↗
      </span>
    </div>
  </CardShell>
);
