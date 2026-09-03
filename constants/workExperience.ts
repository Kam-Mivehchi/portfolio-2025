import type { Job } from '@/types/content';

export const workExperience: Job[] = [
  {
    company: 'Pacific Life',
    role: 'Cloud Engineer (Contract)',
    shortRole: 'Cloud Engineer (Contract)',
    years: 'July 2026 to present',
    shortYears: '2026 to now',
    logo: '/images/logos/pacific-life-logo.png',
    bullets: [
      'Build full-stack services in TypeScript, Node, and React on AWS Lambda, with CI/CD in Azure DevOps.',
      'Moved the codebase from JavaScript to TypeScript without missing feature deadlines.',
      'Own the v2 migration: kept both versions up through the cutover and tracked down the performance bottlenecks.',
      'Automated code review with Copilot CLI and PowerShell so every PR gets the same coverage.',
    ],
  },
  {
    company: 'Altametrics',
    role: 'Software Developer / Team Lead',
    shortRole: 'Software Developer / Team Lead',
    years: 'January 2024 to July 2026',
    shortYears: '2024 to 2026',
    logo: '/images/logos/altametrics-logo.png',
    bullets: [
      'Led the team, hired and onboarded two engineers, and shipped 13+ production apps across web, mobile, and backend.',
      'Built React and Next.js front ends on NestJS APIs in AWS, serving thousands of daily users.',
      'Built the AI content pipeline behind RestaurantAssociation.com; it publishes across multiple domains and draws 10,000+ weekly visitors.',
      'Shipped a React Native app with OCR capture that cut manual entry time 40% for field teams.',
      'Set up CI/CD with GitHub Actions and Docker for seven white-labeled mobile apps; builds got 90% faster.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Software Engineer, Independent Contracts',
    shortRole: 'Software Engineer',
    years: 'June 2022 to present',
    shortYears: '2022 to now',
    logo: '/images/logos/freelancer-logo.png',
    bullets: [
      'Built huntingtonbeachtutoring.com end to end, from design to SEO to deployment.',
      'Rebuilt client WordPress sites in Next.js and TypeScript; organic traffic grew 35%.',
      'Moved client hosting to Vercel with CI/CD and cut their recurring hosting bills to zero.',
      'Took over a stalled production app, got it performing again, and shipped features across its web and iOS apps.',
    ],
  },
  {
    company: 'PL8CHAT',
    role: 'Full Stack Engineer',
    shortRole: 'Full Stack Engineer',
    years: 'June 2023 to June 2024',
    shortYears: '2023 to 2024',
    logo: '/images/logos/pl8chat-logo.png',
    bullets: [
      'Built a real-time chat platform end to end with React Native, Node, and PostgreSQL. 99% uptime on iOS and Android.',
      'Built the web dashboard property managers use to monitor activity and manage residents.',
      'Cut hosting costs 25% with query optimization and server-side caching.',
    ],
  },
  {
    company: 'edX (2U)',
    role: 'Teaching Assistant, Full Stack Web Development',
    shortRole: 'Teaching Assistant, Full Stack',
    years: 'May 2022 to September 2024',
    shortYears: '2022 to 2024',
    logo: '/images/logos/edx-logo.png',
    bullets: [
      'Coached 100+ students through React, Node, and full-stack fundamentals.',
      'Ran study sessions and code reviews; student success rates went up 20%.',
    ],
  },
  {
    company: 'Shepard Bros',
    role: 'R&D Analytical Chemist',
    shortRole: 'R&D Analytical Chemist',
    years: 'December 2020 to December 2022',
    shortYears: '2020 to 2022',
    logo: '/images/logos/shepard-bros-logo.png',
    bullets: [
      'Formulated three new cleaning products to fix problems customers had with competitors.',
      'Ran QC testing against tight chemical specs.',
    ],
  },
];
