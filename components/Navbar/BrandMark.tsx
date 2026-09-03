import Image from 'next/image';
import Link from 'next/link';
import avatar from '@/public/images/avatar-1.png';
import { user } from '@/constants/user';

export const BrandMark = () => (
  <Link href="/" className="flex items-center gap-3">
    <span className="block h-[38px] w-[38px] shrink-0 rounded-full bg-[conic-gradient(from_90deg,#E4572E,#F4A261,#E4572E)] p-[2px] motion-safe:animate-spin-slow">
      <Image
        src={avatar}
        alt={user.name}
        width={38}
        height={38}
        priority
        className="h-full w-full rounded-full object-cover motion-safe:animate-spin-slow-reverse"
      />
    </span>
    <span className="text-base font-bold">{user.name}</span>
  </Link>
);
