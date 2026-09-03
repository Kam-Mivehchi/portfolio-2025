import { ReactNode } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { AmbientBlobs } from './AmbientBlobs';

export const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen [overflow-x:clip]">
    <AmbientBlobs />
    <Navbar />
    <main className="relative">{children}</main>
  </div>
);
