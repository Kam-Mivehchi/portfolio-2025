# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` — start the dev server (localhost:3000)
- `pnpm build` — production build (also runs type checking)
- `pnpm lint` — runs `eslint --fix .` (flat config in `eslint.config.mjs`)
- `pnpm knip` — find unused files/exports/dependencies

There are no tests. The package manager is pnpm (pnpm-lock.yaml).

## Architecture

Personal portfolio site built on Next.js 16 with the **pages router** (not the app router). React 19, TypeScript 7, Tailwind CSS 3, Framer Motion for animation.

**TypeScript 7 setup**: `typescript` is v7 (the native Go compiler; Next uses its `tsc` CLI for type checking). TS 7 has no programmatic API until 7.1, so `.pnpmfile.cjs` injects the official `@typescript/typescript6` compat package into typescript-eslint and knip. Don't remove that hook (or its `pnpm-workspace.yaml`) until those tools support TS ≥ 7.1; plain pnpm overrides/packageExtensions cannot do this because peer dependencies always resolve from the project root.

The import alias `@/*` maps to the repo root (see `tsconfig.json`).

### Design system ("1a Soft & Rounded")

Light cream theme with a coral accent, pill-shaped controls, and white rounded cards. The authoritative spec is `design_handoff_portfolio_redesign/README.md` (untracked handoff bundle) — colors, type scale, radii, shadows, and motion timings are final; match it when touching visuals.

- Theme tokens live in `tailwind.config.js` `theme.extend`: colors (`cream`, `ink`, `coral`, `line`, `sand` — the spec's stone-600/stone-400/green map to stock Tailwind `stone-600`/`stone-400`/`green-600`), shadows (`card`, `featured`, `lift`, `btn`, `coral`, `navpill`), easings (`enter`, `hover`, `pop`), and keyframes/animations (`rise`, `pop`, `drift`, `drift2`, `marquee`, `pulse-dot`, `fill`, `spin-slow`). Don't name custom keyframes `pulse` or `spin` — that clobbers Tailwind's built-ins (`spin-slow` deliberately reuses the built-in `spin` keyframe).
- Font is **Manrope** via `next/font/google` in `pages/_app.tsx`, exposed as `--font-manrope` and wired to `font-sans`.
- Motion rules: CSS entrance animations use `motion-safe:animate-*` (never base class + `motion-reduce` override — content would stay invisible for reduced-motion users); per-element stagger delays go in inline `style={{ animationDelay }}` (Tailwind 3.2 has no animation-delay utility). Framer animations are globally tamed by `<MotionConfig reducedMotion="user">` in `_app`; `CountUp` checks `useReducedMotion()` itself.

### Content lives in `constants/`, typed in `types/content.ts`

All page content is data in `constants/*.ts` rendered by components: `projects.ts` (8 projects — order matters, Restaurant Association first is the featured one and the only entry with a `caseStudy`, which is what makes a card link internally to `/projects/[slug]` instead of its live site), `workExperience.ts` (jobs with full `bullets` for the About accordion plus `shortRole`/`shortYears` for the home rows), `skills.ts`, `tools.ts`, `marquee.ts` (deliberately a different, shorter list than `tools`), `navItems.ts`, `user.ts` (name/email/location/resume/socials). Stack chips are plain strings (no icon map). Project images are **static imports** from `public/images/projects/` (gives Next intrinsic sizes + auto blur placeholders) — import the image at the top of `constants/projects.ts` rather than using a string path.

### Pages and components

- Persistent chrome (drifting background blobs, sticky navbar) lives in `components/Layout/SiteLayout.tsx`, mounted once in `pages/_app.tsx` so the nav's sliding active pill and avatar ring don't remount on route changes. Per-page `<Seo />` (`components/Seo.tsx`) handles head/meta with `NEXT_PUBLIC_SITE_URL`.
- Routes: `/` (`HomeHero`, `Marquee`, `SelectedWork`, `ExperienceRows`, `CtaFooter`), `/projects` (client-side tag filter; `key={filter}` on the grid remounts cards to re-run the pop stagger), `/projects/[slug]` (static paths from projects with a `caseStudy`; live iframe demo), `/about` (sticky portrait column, `SkillCards`, single-open `ExperienceAccordion`, `ToolsCard`, `CtaFooter`).
- Shared primitives in `components/ui/`: `Reveal` (whileInView scroll reveal), `CountUp`, `Marquee` (list rendered twice for the seamless −50% loop), `LiveEmbed` (iframe with the static screenshot layered underneath as fallback — blocked cross-origin frames don't fire onError), `Chip`, `PulseDot`.
- `SiteLayout` uses `[overflow-x:clip]`, not `overflow-x-hidden` — `hidden` creates a scroll container that breaks the sticky navbar.
- `pages/_app.tsx` also wires the NProgress route-change bar (restyled in `styles/globals.css`).

### Environment

`.env` (see `.env.example`): `NEXT_PUBLIC_SITE_URL` (canonical/OG URLs; falls back to https://kamyarmivehchi.com).
