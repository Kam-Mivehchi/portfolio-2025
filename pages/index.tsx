import { CtaFooter } from '@/components/CtaFooter';
import { ExperienceRows } from '@/components/home/ExperienceRows';
import { HomeHero } from '@/components/home/HomeHero';
import { SelectedWork } from '@/components/home/SelectedWork';
import { Marquee } from '@/components/ui/Marquee';
import { Seo } from '@/components/Seo';
import { marqueeItems } from '@/constants/marquee';

export default function Home() {
  return (
    <div className="mx-auto max-w-page">
      <Seo />
      <HomeHero />
      <div
        className="mt-6 motion-safe:animate-rise"
        style={{ animationDelay: '.6s' }}>
        <Marquee items={marqueeItems} />
      </div>
      <SelectedWork />
      <ExperienceRows />
      <CtaFooter
        headline="Let's build something."
        sub="Open to full-time roles and contract work."
      />
    </div>
  );
}
