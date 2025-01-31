import clsx from 'clsx';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Contact } from './Contact';
import { Footer } from './Footer';
import Navbar from './Navbar/Navbar';
import { useBackgroundScrollGradient } from '@/hooks/useBackgroundScrollGradient';
import { motion } from 'framer-motion';
import { CSSProperties } from 'react';

const gradients: Record<string, Exclude<CSSProperties['color'], undefined>[]> =
  {
    a: ['#0e1c26', '#2a454b', '#294861'],
    b: ['#1f2937', '#262626', '#1e293b'],
    c: ['#18181b', '#262626', '#1f2937'],
  };
const backgroundSet = gradients.c;

export const Container = (props: any) => {
  const { children, className, ...customMeta } = props;
  const router = useRouter();

  const { backgroundColor } = useBackgroundScrollGradient(backgroundSet);

  const title = 'Kamyar Mivehchi | Full Stack Software Engineer';
  const meta = {
    title,
    description: `Full Stack Software Engineer`,
    type: 'website',
    image: 'https://devpro.aceternity.com/banner.png',
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="yourwebsite" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourwebsite" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <motion.main
        className={clsx('min-h-screen antialiased ', className)}
        animate={{
          background: backgroundColor,
        }}>
        <Navbar />
        {children}
        <Footer />
        <Contact />
      </motion.main>
    </>
  );
};
