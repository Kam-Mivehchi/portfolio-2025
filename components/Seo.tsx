import Head from 'next/head';
import { useRouter } from 'next/router';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kamyarmivehchi.com';

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

export const Seo = ({
  title = 'Kamyar Mivehchi | Full Stack Software Engineer',
  description = 'Full-stack software engineer in Orange County, CA. React and Next.js up front, Node and PostgreSQL behind it, and the pipelines that ship them.',
  image = `${siteUrl}/banner.png`,
  type = 'website',
}: SeoProps) => {
  const router = useRouter();
  const url = `${siteUrl}${router.asPath === '/' ? '' : router.asPath}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={description} name="description" />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Kamyar Mivehchi" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};
