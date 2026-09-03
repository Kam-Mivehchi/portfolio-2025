import Link from 'next/link';
import { Chip } from '@/components/ui/Chip';
import { LiveEmbed } from '@/components/ui/LiveEmbed';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/constants/projects';

const featured = projects[0];
const smallCards = projects.slice(1, 4);

export const SelectedWork = () => (
  <section className="px-6 pt-16 lg:px-14">
    <Reveal className="mb-6 flex items-baseline justify-between">
      <h2 className="text-[28px] font-extrabold tracking-[-0.03em] md:text-4xl">
        Selected work
      </h2>
      <Link
        href="/projects"
        className="text-[15px] font-semibold text-stone-600 hover:text-ink">
        All {projects.length} projects →
      </Link>
    </Reveal>
    <Reveal>
      <Link
        href={`/projects/${featured.slug}`}
        className="grid grid-cols-1 gap-4 rounded-[32px] bg-white p-4 transition-shadow duration-500 hover:shadow-featured lg:grid-cols-[minmax(0,1fr)_340px]">
        <LiveEmbed
          src={featured.link}
          title={featured.name}
          fallback={featured.image}
          label={`Live · ${featured.host}`}
          className="h-[320px] lg:h-[520px]"
        />
        <div className="flex flex-col justify-between p-4 lg:py-6">
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[.06em] text-coral">
              Featured
            </div>
            <div className="mt-2.5 text-[30px] font-extrabold leading-[1.1] tracking-[-0.03em]">
              {featured.name}
            </div>
            <p className="mt-3.5 text-base leading-normal text-stone-600">
              Industry news platform that pulls in sources, writes articles
              with AI, and publishes on its own. Built from scratch in Next.js
              and run for 2.5 years.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {featured.chips?.map((chip) => (
              <Chip key={chip}>{chip}</Chip>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {smallCards.map((project, i) => (
        <Reveal key={project.slug} delay={i * 0.1}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[200px] flex-col justify-between rounded-[28px] bg-white p-7 transition-shadow duration-500 hover:shadow-card">
            <div
              className="h-11 w-11 rounded-[14px] transition-transform duration-500 ease-pop group-hover:-rotate-[8deg] group-hover:scale-[1.15]"
              style={{ backgroundColor: project.color }}
            />
            <div className="pt-6">
              <div className="text-xl font-extrabold tracking-[-0.02em]">
                {project.name}
              </div>
              <div className="mt-1.5 text-sm leading-[1.45] text-stone-600">
                {project.blurb}
              </div>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </section>
);
