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

### Content lives in `constants/`, not in components

All page content — projects, work experience, tech stack, timeline, nav items, social links — is data defined in `constants/*.tsx` and rendered by components in `components/`. To add a project or job, edit `constants/projects.tsx` or `constants/workExperience.tsx`; each project references stack entries from `constants/stack.tsx` (a keyed object of `{ name, id, icon }` using react-icons). Components rarely need to change for content updates. Project images are **static imports** from `public/images/projects/` (gives Next intrinsic sizes + auto blur placeholders) — when adding a project, import its image at the top of `constants/projects.tsx` rather than using a string path.

### Pages and components

- `pages/index.tsx` composes `Container > Hero > Experience > Projects`; `pages/about.tsx` and `pages/projects.tsx` are the other routes.
- `pages/_app.tsx` wires NProgress route-change progress bar; global styles in `styles/globals.css`.
- `components/Navbar/` splits into `DesktopNav` and `MobileNav`.
- `hooks/useBackgroundScrollGradient.tsx` maps scroll progress onto a list of background colors (used for scroll-driven section color changes via Framer Motion).
- Dark visual theme: components use hardcoded dark palette classes (`text-white`, zinc/near-black backgrounds), not a Tailwind dark-mode toggle.

### API route

`pages/api/meta.ts` (POST) fetches a list of URLs and scrapes OpenGraph metadata with axios + cheerio — used for link previews. Remote image domains are allowlisted in `next.config.mjs` (`api.microlink.io`, `avatars.githubusercontent.com`).

### Environment

`.env` (see `.env.example`): `GITHUB_PERSONAL_ACCESS_TOKEN` (fetching GitHub repos) and `NEXT_PUBLIC_SITE_URL`.

### Leftover template code

The repo started from the "Devpro" template (`documentation.md` is the template's docs, not this project's). `pnpm knip` surfaces dead code.
