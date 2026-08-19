import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './style.module.css';

const Beam = ({ showBeam, className }: any) => {
  const cn = (...values: any) => clsx(twMerge(values));
  const meteorRef = useRef<any>(null);

  useEffect(() => {
    if (!showBeam) return;

    const meteor = meteorRef.current;
    if (!meteor) return;

    const restartAnimation = () => {
      meteor.style.animation = 'none';
      void meteor.offsetWidth;
      meteor.style.animation = null;
    };

    const handleAnimationEnd = () => {
      meteor.style.visibility = 'hidden';
      const animationDelay = Math.floor(Math.random() * (3 - 0) + 0);
      const animationDuration = Math.floor(Math.random() * (4 - 0) + 0);
      const meteorWidth = Math.floor(Math.random() * (150 - 80) + 80);
      meteor.style.setProperty('--meteor-delay', `${animationDelay}s`);
      meteor.style.setProperty('--meteor-duration', `${animationDuration}s`);
      meteor.style.setProperty('--meteor-width', `${meteorWidth}px`);

      restartAnimation();
    };

    const handleAnimationStart = () => {
      meteor.style.visibility = 'visible';
    };

    meteor.addEventListener('animationend', handleAnimationEnd);
    meteor.addEventListener('animationstart', handleAnimationStart);

    return () => {
      meteor.removeEventListener('animationend', handleAnimationEnd);
      meteor.removeEventListener('animationstart', handleAnimationStart);
    };
  }, [showBeam]);

  return (
    showBeam && (
      <span
        ref={meteorRef}
        className={twMerge(
          'absolute z-20  left-4  h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] before:bg-gradient-to-l before:from-transparent before:via-blue-500 before:to-cyan-500',
          styles.meteor,
          className
        )}></span>
    )
  );
};

export default Beam;
