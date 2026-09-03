import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { navItems } from '@/constants/navItems';

const activeIndexForPath = (pathname: string) => {
  if (pathname.startsWith('/projects')) return 1;
  if (pathname.startsWith('/about')) return 2;
  return 0;
};

export const DesktopNav = () => {
  const { pathname } = useRouter();
  const activeIndex = activeIndexForPath(pathname);

  return (
    <div className="relative flex rounded-full bg-white p-1.5 shadow-navpill">
      <motion.span
        aria-hidden
        className="absolute left-1.5 top-1.5 h-10 w-[110px] rounded-full bg-ink"
        initial={false}
        animate={{ x: activeIndex * 110 }}
        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      />
      {navItems.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={i === activeIndex ? 'page' : undefined}
          className={clsx(
            'relative z-10 w-[110px] py-2.5 text-center text-sm font-semibold transition-colors duration-300',
            i === activeIndex ? 'text-white' : 'text-stone-600'
          )}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};
