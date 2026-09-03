import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Seo } from '@/components/Seo';
import { LiveEmbed } from '@/components/ui/LiveEmbed';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/constants/projects';

interface ProjectDetailProps {
  slug: string;
}

export default function ProjectDetailPage({ slug }: ProjectDetailProps) {
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const caseStudy = project.caseStudy!;
  // Neighbors in list order; the first project has no previous entry, so it
  // takes the two that follow (matches the spec's "← Huntington Beach
  // Tutoring / Westmont House →" row on Restaurant Association).
  const prev = index > 0 ? projects[index - 1] : projects[index + 1];
  const next = index > 0 ? projects[index + 1] : projects[index + 2];

  return (
    <div className="mx-auto max-w-page">
      <Seo
        title={`${project.name} | Kamyar Mivehchi`}
        description={project.blurb}
      />
      <div className="px-6 pt-10 lg:px-14">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-600 motion-safe:animate-[rise_.8s_cubic-bezier(.2,.7,.2,1)_both]">
          <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>{' '}
          Projects
        </Link>
        <div className="mt-7 grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.3fr_1fr]">
          <h1
            className="text-[40px] font-extrabold leading-[.98] tracking-[-0.04em] motion-safe:animate-rise md:text-[76px]"
            style={{ animationDelay: '.1s' }}>
            {project.name}
          </h1>
          <p
            className="text-xl leading-normal text-stone-600 motion-safe:animate-rise"
            style={{ animationDelay: '.25s' }}>
            {caseStudy.intro}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { label: 'Role', value: caseStudy.role },
            { label: 'Stack', value: caseStudy.stack },
            { label: 'Year', value: caseStudy.year },
          ].map((meta, i) => (
            <div
              key={meta.label}
              className="rounded-[20px] bg-white p-5 motion-safe:animate-[pop_.8s_cubic-bezier(.2,.7,.2,1)_both]"
              style={{ animationDelay: `${0.35 + i * 0.08}s` }}>
              <div className="text-xs font-bold uppercase tracking-[.08em] text-stone-400">
                {meta.label}
              </div>
              <div className="mt-1.5 text-[17px] font-bold">{meta.value}</div>
            </div>
          ))}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-[20px] bg-coral p-5 text-white transition-[transform,box-shadow] duration-300 ease-hover hover:-translate-y-[3px] hover:shadow-coral motion-safe:animate-[pop_.8s_cubic-bezier(.2,.7,.2,1)_both]"
            style={{ animationDelay: '.59s' }}>
            <span className="text-[17px] font-bold">Visit site</span>
            <span className="text-xl">↗</span>
          </a>
        </div>
      </div>
      <div
        className="mx-6 mt-6 rounded-[32px] bg-white p-4 motion-safe:animate-[pop_1.1s_cubic-bezier(.2,.7,.2,1)_both] lg:mx-14"
        style={{ animationDelay: '.5s' }}>
        <LiveEmbed
          src={project.link}
          title={`${project.name} live`}
          fallback={project.image}
          label="Live demo · scroll to explore"
          interactive
          className="h-[420px] lg:h-[720px]"
        />
      </div>
      <div className="grid grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-3 lg:px-14">
        <Reveal>
          <div className="text-[13px] font-bold uppercase tracking-[.06em] text-coral">
            Problem
          </div>
          <p className="mt-3 text-[17px] leading-[1.55] text-stone-600">
            {caseStudy.problem}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="text-[13px] font-bold uppercase tracking-[.06em] text-coral">
            What I built
          </div>
          <p className="mt-3 text-[17px] leading-[1.55] text-stone-600">
            {caseStudy.built}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="text-[13px] font-bold uppercase tracking-[.06em] text-coral">
            Results
          </div>
          <div className="mt-3 flex flex-col gap-2.5">
            {caseStudy.results.map((result, i) => (
              <div
                key={result.label}
                className="relative overflow-hidden rounded-2xl bg-white px-5 py-4">
                <div
                  className="absolute inset-0 origin-left bg-[#FBE4DC] motion-safe:animate-fill"
                  style={{
                    width: `${result.fill}%`,
                    animationDelay: `${0.6 + i * 0.2}s`,
                  }}
                />
                <div className="relative flex items-center justify-between">
                  <span className="text-[15px] text-stone-600">
                    {result.label}
                  </span>
                  <span className="text-[22px] font-extrabold">
                    {result.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="mx-6 mb-24 flex justify-between border-t border-line py-8 text-base font-bold lg:mx-14">
        <a
          href={prev.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex gap-2 text-stone-400 transition-transform duration-300 hover:-translate-x-1">
          ← {prev.name}
        </a>
        <a
          href={next.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex gap-2 transition-transform duration-300 hover:translate-x-1">
          {next.name} →
        </a>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects
    .filter((p) => p.caseStudy)
    .map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectDetailProps> = async ({
  params,
}) => ({
  props: { slug: params?.slug as string },
});
