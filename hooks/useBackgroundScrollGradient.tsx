import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { CSSProperties } from 'react';

function useBackgroundScrollGradient(
  backgrounds: Exclude<CSSProperties['color'], undefined>[]
) {
  const { scrollYProgress } = useScroll({
    offset: ['start end', 'end start'],
  });
  const [backgroundColor, setBackgroundColor] = React.useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    //creates an even number of breakpoints bases on the number of colors
    // [0,.33,.66]
    const breakpoints = backgrounds.map((_, index) => {
      const res = index / backgrounds.length;

      return res;
    });

    const currentBreakpointIndex = breakpoints.reduce(
      (closestIndex, currentValue, index) => {
        const distance = Math.abs(latest - currentValue);
        if (distance < Math.abs(latest - breakpoints[closestIndex])) {
          return index;
        }

        return closestIndex;
      },
      0
    );
    // ensures a loop if mismatch in breakpoint length
    const currentBackgroundIndex = currentBreakpointIndex % backgrounds.length;
    setBackgroundColor(backgrounds[currentBackgroundIndex]);
    console.log(backgroundColor);
  });
  return { backgroundColor };
}

export { useBackgroundScrollGradient };
