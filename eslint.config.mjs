import coreWebVitals from 'eslint-config-next/core-web-vitals';

const config = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'next-env.d.ts',
      'design_handoff_portfolio_redesign/**',
    ],
  },
  ...coreWebVitals,
];

export default config;
