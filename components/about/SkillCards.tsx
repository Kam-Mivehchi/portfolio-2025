import { Reveal } from '@/components/ui/Reveal';
import { skills } from '@/constants/skills';

export const SkillCards = () => (
  <div className="mt-[72px]">
    <Reveal>
      <h2 className="mb-5 text-[28px] font-extrabold tracking-[-0.03em] md:text-[32px]">
        What I do
      </h2>
    </Reveal>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
      {skills.map((skill, i) => (
        <Reveal key={skill.title} delay={i * 0.1}>
          <div className="group h-full rounded-3xl bg-white p-6 transition-shadow duration-500 hover:shadow-card">
            <div
              className="h-10 w-10 rounded-xl transition-transform duration-500 ease-pop group-hover:-rotate-[8deg] group-hover:scale-[1.15]"
              style={{ backgroundColor: skill.color }}
            />
            <div className="mt-[18px] text-lg font-extrabold tracking-[-0.02em]">
              {skill.title}
            </div>
            <div className="mt-1.5 text-sm leading-normal text-stone-600">
              {skill.body}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);
