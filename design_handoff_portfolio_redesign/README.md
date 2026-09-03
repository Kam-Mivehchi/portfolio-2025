# Handoff: Portfolio Redesign ("1a Soft & Rounded")

## Overview
Full redesign of kamyarmivehchi.com: Home, Projects, Project Detail (Restaurant Association), and About. Light cream theme, coral accent, pill-shaped controls, rounded white cards, and a set of SaaS-style motion patterns (staggered blur-in hero, count-up stats, scroll reveals, marquee, hover lifts).

## About the Design Files
`Portfolio 1a Animated.dc.html` is a **design reference built in HTML**: a clickable prototype showing intended look and behavior. It is NOT production code. Recreate it in the existing repo (**Kam-Mivehchi/portfolio-2025**: Next.js 16 pages router, React 19, TypeScript, Tailwind CSS 3, Framer Motion, react-icons, pnpm) following the repo's conventions from its CLAUDE.md: content in `constants/`, components in `components/`, static image imports for project screenshots.

## Fidelity
**High-fidelity.** Colors, type, spacing, radii, and motion are final. Match them exactly. Where the prototype uses inline styles, translate to Tailwind utilities (arbitrary values are fine, e.g. `rounded-[28px]`, `text-[92px]`).

## Implementation plan (suggested order)
1. **Theme flip**: replace the dark zinc palette with the light tokens below. Remove `useBackgroundScrollGradient` usage in `Container` (background is now static cream + two drifting radial blobs). Swap Inter for **Manrope** via `next/font/google` (weights 400-800).
2. **Tokens**: add colors to `tailwind.config.js` under `theme.extend.colors` (see Design Tokens) and keyframes (`rise`, `pop`, `drift`, `drift2`, `marquee`, `pulse`, `fill`, `spin`).
3. **Data**: update `constants/workExperience.tsx` copy to the plain first-person voice used in the prototype (bullets listed under About below), add `tag` ('Web' | 'Mobile' | 'Platforms') and a short `blurb` to each project in `constants/projects.tsx`. Add a `constants/skills.ts` (3 items) and `constants/tools.ts` (14 strings).
4. **Shared components**: `Navbar` (pill with sliding active indicator), `Reveal` (IntersectionObserver or Framer `whileInView`), `Card` (white, rounded-[28px]), `CTA footer`.
5. **Pages**: `pages/index.tsx`, `pages/projects.tsx`, `pages/projects/[slug].tsx` (new, dynamic; only Restaurant Association has case-study content for now), `pages/about.tsx`.
6. **Remove**: the floating `Contact` bubble (not in the design), NProgress can stay.

## Design Tokens
Colors
- `cream` #F6F1EA (page bg)
- `ink` #1C1917 (text, dark cards, active nav)
- `coral` #E4572E (accent, primary CTA)
- `stone-600` #57534E (body/secondary text)
- `stone-400` #A8A29E (labels, muted)
- `line` #DDD5CA (dividers)
- `sand` #EDE7DF (image placeholder bg)
- `green` #16A34A (live dot)
- white #FFFFFF (cards)
- Project tints/accents: RA #E4572E/#FBE4DC, HB Tutoring #0891B2/#DAF0F5, Westmont #2F6B4F/#DDEEE4, Zip Loyalty #5B4BFF/#E4E1FF, Plum Tunes #0E9F6E/#DCF3EA, FullFork #D97706/#FBEBD2, Plum POS #7C3AED/#ECE2FB, Pl8Chat #B45309/#FBEBD2

Typography (Manrope everywhere)
- Display h1: 92px / 0.95 / 800 / -0.04em (home). About h1: clamp(40px,5vw,64px). Projects h1: 72px. Detail h1: 76px / 0.98.
- Section h2: 36px / 800 / -0.03em (32px on About)
- Card title: 30px (featured), 24px (project card), 20px (small card), 22px (Now card); all 800 / -0.02 to -0.03em
- Body lead: 22px / 1.45 (hero), 20px / 1.5 (detail intro), 19px / 1.55 (about)
- Body: 16-17px / 1.5-1.55; card blurb 14-15px / 1.45
- Eyebrow/label: 12-14px / 600-700 / uppercase / 0.04-0.08em
- Nav: 14px / 600. Buttons: 16px / 700 (primary), 14px / 700 (nav CTA)

Radii: pills 999px; large cards 32px; cards 28px; small cards/meta 20-24px; image wells 20px; icon tiles 12-14px; result bars 16px.
Shadows: hover card `0 24px 50px rgba(28,25,23,.10)`; featured hover `0 30px 70px rgba(28,25,23,.12)`; primary btn hover `0 16px 32px rgba(28,25,23,.25)`; coral btn hover `0 12px 28px rgba(228,87,46,.35)`; nav pill `0 4px 16px rgba(28,25,23,.05)`.
Spacing: page gutter 56px, content max-width 1280px; section gaps 64-96px; card grid gap 16px (12px for meta rows, 20px for project grid).
Easing: `cubic-bezier(.2,.7,.2,1)` for entrances, `cubic-bezier(.2,.8,.2,1)` for hover transforms, `cubic-bezier(.34,1.56,.64,1)` for springy icon pops.

## Global chrome
**Background**: cream, `overflow-x: clip`. Two absolutely positioned radial blobs: (1) 640px circle at top:-220px left:-120px, `radial-gradient(circle, rgba(228,87,46,.22), transparent 65%)`, animation `drift 14s ease-in-out infinite`; (2) 720px at top:240px right:-200px, `rgba(250,204,21,.18)`, `drift2 18s`. pointer-events none.

**Navbar** (sticky top, z-10, padding 20px 56px, bg `rgba(246,241,234,.7)` + `backdrop-blur(16px)`):
- Left: 38px circle avatar with 2px conic-gradient ring (#E4572E → #F4A261 → #E4572E) spinning `8s linear infinite` (counter-rotate the image inside). Name 16px/700.
- Center: white pill (padding 6px, radius 999) with three 110px-wide links Home / Projects / About. Active indicator is an ink pill (110×40) that translates X by `activeIndex*110px` with `transform .5s cubic-bezier(.2,.8,.2,1)` (use Framer `layoutId` like the current DesktopNav). Active text white, inactive #57534E.
- Right: coral pill "Resume ↗" 12px 22px; hover translateY(-2px) + coral shadow.
- Mobile: keep existing MobileNav pattern, restyle to light theme.

**CTA footer** (Home and About): ink block, radius 32px 32px 0 0, padding 56px, margin 96px 56px 0. Coral radial blob top-right (420px, rgba(228,87,46,.5), drift 10s). Left: 44px/800 headline + 18px #A8A29E sub. Right: links 15px/600 (email, LinkedIn, GitHub). Reveals on scroll.

## Screens

### Home
Grid 1.4fr / 1fr, gap 32px, padding 72px 56px 40px.
- Eyebrow (coral, 14px, uppercase): "Full-stack software engineer · Orange County, CA"
- h1: "Kamyar Mivehchi"
- Lead: "I build web products end to end: React and Next.js up front, Node and PostgreSQL behind it, and the pipelines that ship them. Currently at Pacific Life."
- Buttons: ink pill "See projects →" (→ Projects), white pill "Email me". 16px 28px padding.
- Right column: white card "NOW" (label with pulsing green dot) / "Cloud Engineer at Pacific Life" / "July 2026 to present". Below: ink stats card, 2 cols: **10k+** "weekly visitors on the content platform I built and ran" and **13+** "production apps shipped while leading the team at Altametrics". Numbers 40px/800, count up from 0 over 1.6s (ease-out cubic) on mount.
- Entrance: eyebrow/h1/lead/buttons use `rise` 0.9-1s with delays 0 / .1 / .25 / .4s; cards use `pop` .9s at .3 / .45s. Cards hover translateY(-4px) with ±0.5deg rotate.
- **Marquee**: full-width strip, 1px #DDD5CA top/bottom, padding 18px 0, edge fade mask. Items 15px/700 #57534E separated by "·": TypeScript, React, Next.js, React Native, Node.js, NestJS, PostgreSQL, AWS, Docker, GitHub Actions, LLM APIs. Duplicate list, `translateX(-50%)` over 28s linear infinite.
- **Selected work** (padding 64px 56px 0): h2 + "All 8 projects →". Featured card: white, radius 32, padding 16, grid `minmax(0,1fr) 340px`. Left: 520px tall image well (radius 20, bg #EDE7DF) showing a **live iframe** of restaurantassociation.com scaled (1600px wide at scale .5375, pointer-events none) with a "● Live · restaurantassociation.com" pill top-left (12px/700, white 90%). Right: eyebrow "FEATURED", title, blurb "Industry news platform that pulls in sources, writes articles with AI, and publishes on its own. Built from scratch in Next.js and run for 2.5 years.", chips Next.js / TypeScript / Docker (12px/600, cream bg). Whole card clicks → detail. If the iframe is blocked by X-Frame-Options, fall back to the static screenshot.
- Below: 3 small white cards (Huntington Beach Tutoring, Westmont House, Zip Loyalty): 44px color tile (radius 14, project accent) that scales 1.15 + rotates -8deg on hover; title 20px; blurb 14px. Stagger reveal 0.1s.
- **Experience** (padding 96px 56px 0, grid 1fr/2fr): rows with 1px #DDD5CA top border, grid 1fr/2fr/1fr: company 700, role #57534E, years #A8A29E right-aligned. Hover bg white with 14px radius. Rows: Pacific Life / Cloud Engineer (Contract) / 2026 to now; Altametrics / Software Developer / Team Lead / 2024 to 2026; Freelance / Software Engineer / 2022 to now; PL8CHAT / Full Stack Engineer / 2023 to 2024; edX (2U) / Teaching Assistant, Full Stack / 2022 to 2024; Shepard Bros / R&D Analytical Chemist / 2020 to 2022.
- CTA footer: "Let's build something." / "Open to full-time roles and contract work."

### Projects
- Header (padding 56px 56px 24px): h1 "Projects" + filter pills: "All · 8", Web, Mobile, Platforms (10px 16px, 13px/600, active ink/white, inactive white/ink; hover translateY(-2px)). Filtering is client state; cards re-animate with `pop` staggered 0.07s.
- Grid 2 cols, gap 20px. Card: white radius 32 padding 16; image well 260px tall, radius 20, tint bg, screenshot `object-fit: cover; object-position: top` scaling 1.05 on hover; host pill top-left. Below: title 24px + blurb 15px, and a 44px ink circle "↗" that rotates 45deg, scales 1.1, and turns coral on hover. Card hover translateY(-6px) + shadow.
- Order & tags: Restaurant Association (Web), Huntington Beach Tutoring (Web), Westmont House (Web), Zip Loyalty (Mobile), Plum Tunes (Platforms), FullFork (Mobile), Plum POS (Platforms), Pl8Chat (Mobile). Blurbs are in `data/projects.json` in this bundle.

### Project detail (Restaurant Association)
- "← Projects" back link (arrow shifts -4px on hover).
- Grid 1.3fr/1fr, align end: h1 "Restaurant Association" + intro 20px "A restaurant-industry news site that runs itself: it pulls in sources, drafts articles with AI, and publishes on a schedule. I built it from a simple blog into the full platform and ran it for 2.5 years."
- Meta row, 4 cols gap 12: Role "Lead engineer", Stack "Next.js · NestJS · AWS · Docker", Year "2024 to 2026", coral "Visit site ↗" (external link). Stagger `pop` .35/.43/.51/.59s.
- Live demo card: white radius 32 padding 16, 720px iframe (interactive), "● Live demo · scroll to explore" pill.
- 3 cols gap 40 (padding 64px 56px), each reveals with 0.12s stagger:
  - PROBLEM: "Publishing industry news by hand was slow and expensive. The existing blog had little traffic and no way to scale output."
  - WHAT I BUILT: "An end-to-end content system: a retrieval pipeline feeds industry data to LLM APIs, which draft and edit articles that publish across multiple domains. A Next.js front end serves them with SEO baked in, NestJS APIs on AWS behind it."
  - RESULTS: two white bars (radius 16) with a #FBE4DC fill that scales X from 0 (`fill 1.4s`, delays .6/.8s): "Content cost  -99%", "Weekly visitors  10k+".
- Prev/next row: "← Huntington Beach Tutoring" (muted) / "Westmont House →".

### About
Grid `minmax(280px,420px) minmax(0,1fr)`, gap 56, padding 64px 56px 0.
- Left column sticky (top 104px): white card radius 32 padding 16 containing 480px portrait (radius 20; use `/images/avatar-1.png` for now, swap for a real photo). Hover rotate -1.5deg. Below: two meta cards "BASED IN / Orange County, CA" and "● STATUS / Open to work". Then coral "Download resume ↓" card (20px 24px).
- Right column (min-width 0):
  - Eyebrow "ABOUT", h1 "I like building the thing that does the work for you."
  - Three paragraphs 19px/1.55 #57534E:
    1. "I'm a full-stack engineer. For the last few years most of my work has been for restaurants and the people who run them: point of sale, loyalty, support chat, and a news platform that writes and publishes itself. Before software I was an analytical chemist, which is where I learned to break down messy systems."
    2. "I care about shipping: a clean data model, a front end that feels fast, and a deploy pipeline nobody has to babysit. If a problem is repetitive, I'd rather automate it than staff it. I led a team at Altametrics for two and a half years and now build cloud services at Pacific Life."
    3. "Off the clock I'm working on an MS in Computer Science at CSU Long Beach, or finding a new place to eat."
  - **What I do** (h2 32px; grid auto-fit minmax(200px,1fr)): Front end / "React, Next.js, React Native. Interfaces that feel fast and stay maintainable." (#E4572E); Back end and data / "Node.js, NestJS, PostgreSQL, AWS. Clean schemas and APIs that scale." (#5B4BFF); Automation and delivery / "CI/CD, Docker, GitHub Actions, AI pipelines. Systems that run without babysitting." (#0E9F6E). 40px color tile pops on hover.
  - **Experience accordion**: one white card per job (radius 24, padding 24px 28px). Header grid: logo 40px (radius 12) + company 18px/800 | role 15px #57534E | years 14px #A8A29E + 32px cream circle chevron that rotates 180deg when open. Body uses `grid-template-rows: 0fr → 1fr` transition (.5s) for height animation. First item open by default; clicking toggles (only one open). Bullets: 6px coral dot + 15px text. Full bullet copy in `data/experience.json`.
  - **Tools I reach for**: white card, wrapped chips (14px/600, cream bg, 9px 16px). Hover: ink bg, white text, translateY(-3px). TypeScript, React, Next.js, React Native, Node.js, NestJS, PostgreSQL, AWS Lambda, Docker, GitHub Actions, Azure DevOps, Tailwind CSS, Vercel, LLM APIs.
- CTA footer: "Let's talk." / "Full-time, contract, or just a good conversation."

## Interactions & Behavior
- **Scroll reveal**: elements start `opacity 0; translateY(28px)` and transition to visible (.9s) when 15% in view, once. Use Framer `whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.15}}`.
- **Page entrances**: `rise` = from opacity 0 / translateY(28px) / blur(6px) to none. `pop` = from opacity 0 / scale(.94) translateY(16px).
- **Keyframes**: `drift` 0→(60px,-40px, scale 1.12)→0; `drift2` 0→(-50px,50px, scale .94)→0; `marquee` translateX 0→-50%; `pulse` box-shadow 0 0 0 0 rgba(22,163,74,.55) → 0 0 0 10px transparent (1.8s ease-out infinite); `fill` scaleX 0→1; `spin` 360deg.
- Route changes scroll to top. Respect `prefers-reduced-motion`: disable marquee, drift, spin, and count-up.
- Responsive: below 1024px collapse hero and About to one column, project grid to 1 col, marquee stays. Below 768px h1 sizes: 56 / 44 / 48 / 40.

## State
- Nav active index derived from route.
- Projects: `filter` ('All'|'Web'|'Mobile'|'Platforms').
- About: `openJob` index (default 0, -1 = none).
- Home stats: count-up via rAF or Framer `animate()` on mount.
- No data fetching required; all content static from `constants/`.

## Assets
- `public/images/avatar-1.png`, `public/images/logos/*` (6 logos incl. pacific-life), `public/images/projects/*` (8 screenshots) already exist in the repo; keep static imports.
- Font: Manrope (Google Fonts, 400/500/600/700/800).
- Live embeds: `https://restaurantassociation.com` in an iframe (verify it allows framing in production; otherwise use the screenshot).

## Files in this bundle
- `Portfolio 1a Animated.dc.html` + `support.js` + `image-slot.js`: the interactive prototype (open the HTML in a browser; nav links switch screens).
- `data/projects.json`, `data/experience.json`, `data/skills.json`: exact copy to drop into `constants/`.
- `images/`: the same assets as the repo for convenience.
