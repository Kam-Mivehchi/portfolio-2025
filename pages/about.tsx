import Image from 'next/image';
import { Seo } from '@/components/Seo';
import { CtaFooter } from '@/components/CtaFooter';
import { ExperienceAccordion } from '@/components/about/ExperienceAccordion';
import { SkillCards } from '@/components/about/SkillCards';
import { ToolsCard } from '@/components/about/ToolsCard';
import { PulseDot } from '@/components/ui/PulseDot';
import { user } from '@/constants/user';
import avatar from '@/public/images/avatar-1.png';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-page">
      <Seo title="About | Kamyar Mivehchi" />
      <div className="grid grid-cols-1 items-start gap-10 px-6 pt-16 lg:grid-cols-[minmax(280px,420px)_minmax(0,1fr)] lg:gap-14 lg:px-14">
        <div
          className="flex flex-col gap-4 motion-safe:animate-[pop_1s_cubic-bezier(.2,.7,.2,1)_both] lg:sticky lg:top-[104px]"
          style={{ animationDelay: '.1s' }}>
          <div className="rounded-[32px] bg-white p-4 transition-transform duration-500 ease-hover hover:rotate-[-1.5deg]">
            <div className="relative h-[380px] overflow-hidden rounded-[20px] bg-sand lg:h-[480px]">
              <Image
                src={avatar}
                alt={user.name}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[20px] bg-white p-5">
              <div className="text-xs font-bold uppercase tracking-[.08em] text-stone-400">
                Based in
              </div>
              <div className="mt-1.5 text-[17px] font-bold">
                {user.location}
              </div>
            </div>
            <div className="rounded-[20px] bg-white p-5">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[.08em] text-stone-400">
                <PulseDot />
                Status
              </div>
              <div className="mt-1.5 text-[17px] font-bold">Open to work</div>
            </div>
          </div>
          <a
            href={user.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-[20px] bg-coral px-6 py-5 text-[17px] font-bold text-white transition-[transform,box-shadow] duration-300 ease-hover hover:-translate-y-[3px] hover:shadow-coral">
            <span>Download resume</span>
            <span>↓</span>
          </a>
        </div>

        <div className="min-w-0">
          <div className="mb-5 text-sm font-semibold uppercase tracking-[.04em] text-coral motion-safe:animate-[rise_.9s_cubic-bezier(.2,.7,.2,1)_both]">
            About
          </div>
          <h1
            className="text-[44px] font-extrabold leading-none tracking-[-0.04em] [text-wrap:balance] motion-safe:animate-rise md:text-[clamp(40px,5vw,64px)]"
            style={{ animationDelay: '.1s' }}>
            I like building the thing that does the work for you.
          </h1>
          <div
            className="mt-8 flex max-w-[640px] flex-col gap-5 text-[19px] leading-[1.55] text-stone-600 [text-wrap:pretty] motion-safe:animate-rise"
            style={{ animationDelay: '.25s' }}>
            <p>
              I&apos;m a full-stack engineer. For the last few years most of my
              work has been for restaurants and the people who run them: point
              of sale, loyalty, support chat, and a news platform that writes
              and publishes itself. Before software I was an analytical
              chemist, which is where I learned to break down messy systems.
            </p>
            <p>
              I care about shipping: a clean data model, a front end that
              feels fast, and a deploy pipeline nobody has to babysit. If a
              problem is repetitive, I&apos;d rather automate it than staff
              it. I led a team at Altametrics for two and a half years and now
              build cloud services at Pacific Life.
            </p>
            <p>
              Off the clock I&apos;m working on an MS in Computer Science at
              CSU Long Beach, or finding a new place to eat.
            </p>
          </div>
          <SkillCards />
          <ExperienceAccordion />
          <ToolsCard />
        </div>
      </div>
      <CtaFooter
        headline="Let's talk."
        sub="Full-time, contract, or just a good conversation."
      />
    </div>
  );
}
