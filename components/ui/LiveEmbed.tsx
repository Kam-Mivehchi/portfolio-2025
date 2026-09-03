import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { PulseDot } from './PulseDot';

interface LiveEmbedProps {
  src: string;
  title: string;
  fallback: StaticImageData;
  label: string;
  interactive?: boolean;
  className?: string;
}

/**
 * Live iframe well with the static screenshot layered underneath — a
 * cross-origin frame blocked by X-Frame-Options doesn't fire onError,
 * so the screenshot simply shows through wherever the iframe can't paint.
 */
export const LiveEmbed = ({
  src,
  title,
  fallback,
  label,
  interactive = false,
  className,
}: LiveEmbedProps) => (
  <div
    className={`relative overflow-hidden rounded-[20px] bg-sand ${className ?? ''}`}>
    <Image
      src={fallback}
      alt={title}
      fill
      sizes="(max-width: 1024px) 100vw, 900px"
      className="object-cover object-top"
      placeholder="blur"
    />
    <iframe
      src={src}
      title={title}
      loading="lazy"
      tabIndex={-1}
      referrerPolicy="no-referrer"
      className={
        interactive
          ? 'absolute inset-0 h-full w-full border-0'
          : 'pointer-events-none absolute left-0 top-0 h-[1040px] w-[1600px] origin-top-left scale-[.5375] border-0'
      }
    />
    <span className="absolute left-3.5 top-3.5 z-10 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold">
      <PulseDot />
      {label}
    </span>
  </div>
);
