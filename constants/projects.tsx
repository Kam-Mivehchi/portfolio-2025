import { stack } from './stack';

export const projects = [
  {
    title: 'Restaurant Association',
    description:
      'An automated blog platform that scrapes restaurant industry news and generates content using AI.',
    image: '/images/projects/restaurant-association.webp',
    imgClass: 'relative w-1/2 h-auto',
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
    image: '/images/projects/westmont.svg',
    imgClass: 'relative w-full h-full',

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
    image: '/images/projects/ziployalty.webp',
    imgClass: 'relative w-full h-full',

    stack: [stack.reactNative, stack.typescript, stack.tailwindcss],
    link: 'https://ziployalty.com',
  },
  {
    title: 'ZipTunes',
    description:
      'A B2B music streaming platform designed for businesses to create the perfect ambiance.',
    image: '/images/projects/ziptunes.svg',
    imgClass: 'relative w-full h-full',

    stack: [stack.react, stack.typescript, stack.tailwindcss],
    link: 'https://zip-tunes.com',
  },
  {
    title: 'FullFork',
    description:
      'A mobile app designed to help restaurants release discounts and coupon codes to boost customer engagement.',
    image: '/images/projects/fullfork.svg',
    imgClass: 'relative w-full h-full',

    stack: [stack.reactNative, stack.typescript, stack.apple, stack.android],
    link: 'https://fullfork.com',
  },
  {
    title: 'Plum POS',
    description:
      'A comprehensive POS system for restaurants that simplifies operations and optimizes workflows.',
    image: '/images/projects/plumpos.svg',
    imgClass: 'relative w-full h-full',

    stack: [stack.nextjs, stack.tailwindcss, stack.typescript, stack.react],
    link: 'https://plumpos.com',
  },
  {
    title: 'Pl8Chat',
    description:
      'A customer support chat platform tailored for restaurants, enhancing communication and guest satisfaction.',
    image: '/images/logos/pl8chat-logo.png',
    imgClass: 'relative w-full h-full',

    stack: [
      stack.nextjs,
      stack.tailwindcss,
      stack.typescript,
      stack.react,
      stack.apple,
      stack.android,
    ],
    link: 'https://pl8chat.com',
  },
];
