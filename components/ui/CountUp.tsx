import { animate, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number;
}

export const CountUp = ({ to, suffix = '', duration = 1.6 }: CountUpProps) => {
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.33, 1, 0.68, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [to, duration, reducedMotion]);

  return (
    <span className="tabular-nums">
      {reducedMotion ? to : value}
      {suffix}
    </span>
  );
};
