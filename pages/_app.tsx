import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useRouter } from 'next/router';
import { Manrope } from 'next/font/google';
import { MotionConfig } from 'framer-motion';
import { SiteLayout } from '@/components/Layout/SiteLayout';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleStart = (url: string) => {
      NProgress.start();
    };
    const handleStop = (url: string) => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
  return (
    <MotionConfig reducedMotion="user">
      <div className={`${manrope.variable} font-sans`}>
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </div>
    </MotionConfig>
  );
}
