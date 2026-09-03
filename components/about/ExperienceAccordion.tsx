import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { workExperience } from '@/constants/workExperience';

export const ExperienceAccordion = () => {
  const [openJob, setOpenJob] = useState(0);

  return (
    <div className="mt-[72px]">
      <Reveal>
        <h2 className="mb-5 text-[28px] font-extrabold tracking-[-0.03em] md:text-[32px]">
          Experience
        </h2>
      </Reveal>
      <div className="flex flex-col gap-3">
        {workExperience.map((job, i) => {
          const isOpen = openJob === i;
          const panelId = `job-panel-${i}`;
          return (
            <Reveal key={job.company} delay={i * 0.08}>
              <div className="rounded-3xl bg-white px-7 py-6 transition-shadow duration-500 hover:shadow-card">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenJob(isOpen ? -1 : i)}
                  className="grid w-full grid-cols-[1fr_auto] items-center gap-4 text-left lg:grid-cols-[1fr_1fr_auto]">
                  <span className="flex items-center gap-3.5">
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-xl bg-cream object-cover"
                    />
                    <span className="text-lg font-extrabold tracking-[-0.02em]">
                      {job.company}
                    </span>
                  </span>
                  <span className="order-3 col-span-2 text-[15px] text-stone-600 lg:order-none lg:col-span-1">
                    {job.role}
                  </span>
                  <span className="flex items-center gap-4">
                    <span className="whitespace-nowrap text-sm text-stone-400">
                      {job.years}
                    </span>
                    <span
                      className={clsx(
                        'flex h-8 w-8 items-center justify-center rounded-full bg-cream text-sm transition-transform duration-500 ease-pop',
                        isOpen && 'rotate-180'
                      )}>
                      ↓
                    </span>
                  </span>
                </button>
                <div
                  id={panelId}
                  className={clsx(
                    'grid transition-[grid-template-rows] duration-500 ease-hover',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  )}>
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-2.5 pt-5">
                      {job.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="flex gap-3 text-[15px] leading-normal text-stone-600">
                          <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-coral" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};
