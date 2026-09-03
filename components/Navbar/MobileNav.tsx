import { AnimatePresence, motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoIosCloseCircleOutline, IoIosMenu } from 'react-icons/io';
import { navItems } from '@/constants/navItems';
import { user } from '@/constants/user';

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const item: Variants = {
    exit: {
      opacity: 0,
      transition: { ease: 'easeInOut', duration: 0.1 },
    },
    show: {
      height: '100vh',
      opacity: 1,
      transition: { duration: 0.1, staggerChildren: 0.1 },
    },
    hidden: { opacity: 0, height: 0 },
  };

  const childItems: Variants = {
    hidden: { x: '-2vw', opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="text-ink">
        <IoIosMenu className="h-7 w-7" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-10 bg-cream text-xl font-bold">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-8 top-14 text-ink">
              <IoIosCloseCircleOutline className="h-6 w-6" />
            </button>
            {navItems.map((navItem) => (
              <Link
                key={navItem.href}
                href={navItem.href}
                onClick={() => setOpen(false)}
                className="text-ink">
                <motion.span variants={childItems} className="block">
                  {navItem.name}
                </motion.span>
              </Link>
            ))}
            <motion.a
              variants={childItems}
              href={user.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-coral px-[22px] py-3 text-sm font-bold text-white">
              Resume ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
