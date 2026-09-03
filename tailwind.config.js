/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F6F1EA',
        ink: '#1C1917',
        coral: '#E4572E',
        line: '#DDD5CA',
        sand: '#EDE7DF',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        page: '1280px',
      },
      boxShadow: {
        card: '0 24px 50px rgba(28,25,23,.10)',
        featured: '0 30px 70px rgba(28,25,23,.12)',
        lift: '0 30px 60px rgba(28,25,23,.12)',
        btn: '0 16px 32px rgba(28,25,23,.25)',
        coral: '0 12px 28px rgba(228,87,46,.35)',
        navpill: '0 4px 16px rgba(28,25,23,.05)',
      },
      transitionTimingFunction: {
        enter: 'cubic-bezier(.2,.7,.2,1)',
        hover: 'cubic-bezier(.2,.8,.2,1)',
        pop: 'cubic-bezier(.34,1.56,.64,1)',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(28px)', filter: 'blur(6px)' },
          to: { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        pop: {
          from: { opacity: '0', transform: 'scale(.94) translateY(16px)' },
          to: { opacity: '1', transform: 'none' },
        },
        drift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(60px,-40px) scale(1.12)' },
        },
        drift2: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(-50px,50px) scale(.94)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%': { boxShadow: '0 0 0 0 rgba(22,163,74,.55)' },
          '100%': { boxShadow: '0 0 0 10px rgba(22,163,74,0)' },
        },
        fill: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        rise: 'rise 1s cubic-bezier(.2,.7,.2,1) both',
        pop: 'pop .9s cubic-bezier(.2,.7,.2,1) both',
        drift: 'drift 14s ease-in-out infinite',
        drift2: 'drift2 18s ease-in-out infinite',
        'drift-fast': 'drift 10s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'pulse-dot': 'pulseDot 1.8s ease-out infinite',
        fill: 'fill 1.4s cubic-bezier(.2,.7,.2,1) both',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slow-reverse': 'spin 8s linear infinite reverse',
      },
    },
  },
  plugins: [],
};
