import Link from 'next/link';
import { CountUp } from '@/components/ui/CountUp';
import { PulseDot } from '@/components/ui/PulseDot';
import { user } from '@/constants/user';

export const HomeHero = () => (
  <div className="grid grid-cols-1 gap-8 px-6 pb-10 pt-12 lg:grid-cols-[1.4fr_1fr] lg:px-14 lg:pt-[72px]">
    <div>
      <div className="mb-5 text-sm font-semibold uppercase tracking-[.04em] text-coral motion-safe:animate-[rise_.9s_cubic-bezier(.2,.7,.2,1)_both]">
        Full-stack software engineer · Orange County, CA
      </div>
      <h1
        className="text-[56px] font-extrabold leading-[1.1] tracking-[-0.04em] [text-wrap:balance] motion-safe:animate-rise md:text-[92px]"
        style={{ animationDelay: '.1s' }}>
        Kamyar Mivehchi
      </h1>
      <p
        className="my-8 mb-10 max-w-[600px] text-[22px] leading-[1.45] text-stone-600 [text-wrap:pretty] motion-safe:animate-rise"
        style={{ animationDelay: '.25s' }}>
        I build web products end to end: React and Next.js up front, Node and
        PostgreSQL behind it, and the pipelines that ship them. Currently at
        Pacific Life.
      </p>
      <div
        className="flex flex-wrap gap-3 motion-safe:animate-rise"
        style={{ animationDelay: '.4s' }}>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-base font-bold text-white transition-[transform,box-shadow] duration-300 ease-hover hover:-translate-y-[3px] hover:shadow-btn">
          See projects{' '}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
        <a
          href={`mailto:${user.email}`}
          className="rounded-full bg-white px-7 py-4 text-base font-bold text-ink transition-[transform,box-shadow] duration-300 ease-hover hover:-translate-y-[3px] hover:shadow-card">
          Email me
        </a>
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <div
        className="rounded-[28px] bg-white p-7 transition-transform duration-500 ease-hover hover:-translate-y-1 hover:rotate-[-0.5deg] motion-safe:animate-pop"
        style={{ animationDelay: '.3s' }}>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.08em] text-stone-400">
          <PulseDot />
          Now
        </div>
        <div className="mt-2.5 text-[22px] font-bold leading-tight">
          Cloud Engineer at Pacific Life
        </div>
        <div className="mt-1.5 text-[15px] text-stone-600">
          July 2026 to present
        </div>
      </div>
      <div
        className="grid grid-cols-2 gap-5 rounded-[28px] bg-ink p-7 text-white transition-transform duration-500 ease-hover hover:-translate-y-1 hover:rotate-[0.5deg] motion-safe:animate-pop"
        style={{ animationDelay: '.45s' }}>
        <div>
          <div className="text-[40px] font-extrabold tracking-[-0.03em]">
            <CountUp to={10} suffix="k+" />
          </div>
          <div className="mt-1 text-sm text-stone-400">
            weekly visitors on the content platform I built and ran
          </div>
        </div>
        <div>
          <div className="text-[40px] font-extrabold tracking-[-0.03em]">
            <CountUp to={13} suffix="+" />
          </div>
          <div className="mt-1 text-sm text-stone-400">
            production apps shipped while leading the team at Altametrics
          </div>
        </div>
      </div>
    </div>
  </div>
);
