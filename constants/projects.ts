import fullfork from '@/public/images/projects/fullfork.png';
import huntingtonBeachTutoring from '@/public/images/projects/huntington-beach-tutoring.png';
import mobilePl8chat from '@/public/images/projects/mobile-pl8chat.webp';
import restaurantAssociation from '@/public/images/projects/restaurant-association.png';
import westmont from '@/public/images/projects/westmont.png';
import ziployalty from '@/public/images/projects/ziployalty.png';
import ziptunes from '@/public/images/projects/ziptunes.png';
import plumpos from '@/public/images/projects/plumpos.png';
import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    slug: 'restaurant-association',
    name: 'Restaurant Association',
    host: 'restaurantassociation.com',
    tag: 'Web',
    blurb:
      'Industry news site that pulls in sources, writes with AI, and publishes itself.',
    image: restaurantAssociation,
    color: '#E4572E',
    tint: '#FBE4DC',
    link: 'https://restaurantassociation.com',
    chips: ['Next.js', 'TypeScript', 'Docker'],
    caseStudy: {
      role: 'Lead engineer',
      stack: 'Next.js · NestJS · AWS · Docker',
      year: '2024 to 2026',
      intro:
        'A restaurant-industry news site that runs itself: it pulls in sources, drafts articles with AI, and publishes on a schedule. I built it from a simple blog into the full platform and ran it for 2.5 years.',
      problem:
        'Publishing industry news by hand was slow and expensive. The existing blog had little traffic and no way to scale output.',
      built:
        'An end-to-end content system: a retrieval pipeline feeds industry data to LLM APIs, which draft and edit articles that publish across multiple domains. A Next.js front end serves them with SEO baked in, NestJS APIs on AWS behind it.',
      results: [
        { label: 'Content cost', value: '-99%', fill: 99 },
        { label: 'Weekly visitors', value: '10k+', fill: 100 },
      ],
    },
  },
  {
    slug: 'huntington-beach-tutoring',
    name: 'Huntington Beach Tutoring',
    host: 'huntingtonbeachtutoring.com',
    tag: 'Web',
    blurb:
      'Site for a local tutoring business, built end to end. Ranks for math and science tutoring across Orange County.',
    image: huntingtonBeachTutoring,
    color: '#0891B2',
    tint: '#DAF0F5',
    link: 'https://huntingtonbeachtutoring.com',
  },
  {
    slug: 'westmont-house',
    name: 'Westmont House',
    host: 'westmonthouse.com',
    tag: 'Web',
    blurb: 'Marketing site for an assisted-living community in McLean, VA.',
    image: westmont,
    color: '#2F6B4F',
    tint: '#DDEEE4',
    link: 'https://westmonthouse.com',
  },
  {
    slug: 'zip-loyalty',
    name: 'Zip Loyalty',
    host: 'ziployalty.com',
    tag: 'Mobile',
    blurb: 'Loyalty app that measures and rewards repeat customers.',
    image: ziployalty,
    color: '#5B4BFF',
    tint: '#E4E1FF',
    link: 'https://ziployalty.com',
  },
  {
    slug: 'plum-tunes',
    name: 'Plum Tunes',
    host: 'plum-tunes.com',
    tag: 'Platforms',
    blurb:
      'B2B music streaming for setting the mood in a business. Formerly ZipTunes.',
    image: ziptunes,
    color: '#0E9F6E',
    tint: '#DCF3EA',
    link: 'https://plum-tunes.com',
  },
  {
    slug: 'fullfork',
    name: 'FullFork',
    host: 'fullfork.com',
    tag: 'Mobile',
    blurb: 'Mobile app for restaurants to push discounts and coupon codes.',
    image: fullfork,
    color: '#D97706',
    tint: '#FBEBD2',
    link: 'https://fullfork.com',
  },
  {
    slug: 'plum-pos',
    name: 'Plum POS',
    host: 'plumpos.com',
    tag: 'Platforms',
    blurb: 'Point-of-sale system that simplifies restaurant operations.',
    image: plumpos,
    color: '#7C3AED',
    tint: '#ECE2FB',
    link: 'https://plumpos.com',
  },
  {
    slug: 'pl8chat',
    name: 'Pl8Chat',
    host: 'App Store',
    tag: 'Mobile',
    blurb: 'Customer-support chat built for restaurants, on iOS and Android.',
    image: mobilePl8chat,
    color: '#B45309',
    tint: '#FBEBD2',
    link: 'https://apps.apple.com/us/app/pl8chat/id6474788258',
  },
];
