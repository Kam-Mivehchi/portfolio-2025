import { Reveal } from '@/components/ui/Reveal';
import { user } from '@/constants/user';

interface CtaFooterProps {
  headline: string;
  sub: string;
}

export const CtaFooter = ({ headline, sub }: CtaFooterProps) => (
  <Reveal className="mx-6 mt-24 lg:mx-14">
    <footer className="relative overflow-hidden rounded-t-[32px] bg-ink p-8 text-white lg:p-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[120px] -top-[160px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(228,87,46,.5),transparent_65%)] motion-safe:animate-drift-fast"
      />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[32px] font-extrabold leading-none tracking-[-0.03em] lg:text-[44px]">
            {headline}
          </p>
          <p className="mt-3.5 text-lg text-stone-400">{sub}</p>
        </div>
        <div className="flex flex-wrap gap-6 text-[15px] font-semibold">
          <a href={`mailto:${user.email}`} className="hover:text-coral">
            {user.email}
          </a>
          <a
            href={user.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-coral">
            LinkedIn
          </a>
          <a
            href={user.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-coral">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  </Reveal>
);
