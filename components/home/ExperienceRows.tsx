import { Reveal } from '@/components/ui/Reveal';
import { workExperience } from '@/constants/workExperience';

export const ExperienceRows = () => (
  <section className="grid grid-cols-1 gap-8 px-6 pt-24 lg:grid-cols-[1fr_2fr] lg:px-14">
    <Reveal>
      <h2 className="text-[28px] font-extrabold tracking-[-0.03em] md:text-4xl">
        Experience
      </h2>
    </Reveal>
    <div className="flex flex-col">
      {workExperience.map((job, i) => (
        <Reveal key={job.company} delay={i * 0.08}>
          <div className="-mx-3 grid grid-cols-[1fr_auto] gap-x-4 rounded-[14px] border-t border-line px-3 py-5 text-base transition-colors duration-300 hover:bg-white lg:grid-cols-[1fr_2fr_1fr]">
            <span className="font-bold">{job.company}</span>
            <span className="order-3 col-span-2 text-stone-600 lg:order-none lg:col-span-1">
              {job.shortRole}
            </span>
            <span className="text-right text-stone-400">{job.shortYears}</span>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
