import { ReactNode } from 'react';

export const Chip = ({ children }: { children: ReactNode }) => (
  <span className="rounded-full bg-cream px-3 py-1.5 text-xs font-semibold">
    {children}
  </span>
);
