import fullfork from '@/public/images/projects/fullfork.png';
import huntingtonBeachTutoring from '@/public/images/projects/huntington-beach-tutoring.png';
import mobilePl8chat from '@/public/images/projects/mobile-pl8chat.webp';
import restaurantAssociation from '@/public/images/projects/restaurant-association.png';
import westmont from '@/public/images/projects/westmont.png';
import ziployalty from '@/public/images/projects/ziployalty.png';
import ziptunes from '@/public/images/projects/ziptunes.png';
import plumpos from '@/public/images/projects/plumpos.png';
import { stack } from './stack';

export const projects = [
  {
    title: 'Huntington Beach Tutoring',
    description:
      'A tutoring business site built end to end — design, SEO, and deployment — ranking for math & science tutoring across Orange County.',
    image: huntingtonBeachTutoring,
    stack: [stack.nextjs, stack.typescript, stack.tailwindcss, stack.react],
    link: 'https://huntingtonbeachtutoring.com',
  },
  {
    title: 'Restaurant Association',
    description:
      'An automated blog platform that scrapes restaurant industry news and generates content using AI.',
    image: restaurantAssociation,
    stack: [
      stack.nextjs,
      stack.typescript,
      stack.tailwindcss,
      stack.react,
      stack.docker,
    ],
    link: 'https://restaurantassociation.com',
  },
  {
    title: 'Westmont House',
    description:
      'A beautifully crafted website for an assisted living facility in McLean, VA.',
    image: westmont,
    stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
    link: 'https://westmonthouse.com',
  },
  // {
  //   title: 'Customerology',
  //   description:
  //     'A suite of platforms for marketing and customer engagement, helping businesses connect with and retain their customers effectively.',
  //   image: '/images/projects/customerology.png',
  //   stack: [stack.nextjs, stack.typescript, stack.tailwindcss, stack.react],
  //   link: 'https://customerology.com',
  // },
  {
    title: 'Zip Loyalty',
    description:
      'A loyalty platform that helps businesses measure and reward customer loyalty.',
    image: ziployalty,
    stack: [stack.reactNative, stack.typescript, stack.tailwindcss],
    link: 'https://ziployalty.com',
  },
  {
    title: 'Plum Tunes',
    description:
      'A B2B music streaming platform (formerly ZipTunes) designed for businesses to create the perfect ambiance.',
    image: ziptunes,
    stack: [stack.react, stack.typescript, stack.tailwindcss],
    link: 'https://plum-tunes.com',
  },
  {
    title: 'FullFork',
    description:
      'A mobile app designed to help restaurants release discounts and coupon codes to boost customer engagement.',
    image: fullfork,
    stack: [stack.reactNative, stack.typescript, stack.apple, stack.android],
    link: 'https://fullfork.com',
  },
  {
    title: 'Plum POS',
    description:
      'A comprehensive POS system for restaurants that simplifies operations and optimizes workflows.',
    image: plumpos,
    stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
    link: 'https://plumpos.com',
  },
  {
    title: 'Pl8Chat',
    description:
      'A customer support chat platform tailored for restaurants, enhancing communication and guest satisfaction.',
    image: mobilePl8chat,
    stack: [stack.apple, stack.android, stack.typescript, stack.reactNative],
    link: 'https://apps.apple.com/us/app/pl8chat/id6474788258',
  },
];
