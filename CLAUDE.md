@AGENTS.md

# Portfolio — Dasun Tharuka

Personal portfolio for Dasun Tharuka Abeygunasekara (Associate Software Engineer, BotCalm). Next.js 16 App Router + Tailwind v4 + shadcn tokens. Package manager: pnpm.

## Design system — "amber terminal"

- Palette tokens (defined in `app/globals.css` `@theme`): `ink` #0A0E16 bg, `ink-raised` surfaces, `snow` text, `fog` muted, `amber` #F6A83C accent, `hairline` dividers. Use these Tailwind utilities (`bg-ink`, `text-fog`, `border-hairline`, …) — never raw hex in components.
- Type: Bricolage Grotesque (`font-display`) for headings, Geist (`font-sans`) body, Geist Mono (`font-mono`) for labels/eyebrows/terminal-style lines.
- Entrance animations: `.anim-rise` / `.anim-nav` + `--anim-delay` inline var for staggering. Reduced motion is respected globally — keep it that way.
- Signature element: the draggable 3D lanyard badge in the hero (`components/Lanyard.tsx`, react-bits derived; assets `public/card.glb`, `public/lanyard.png`). Keep other decoration quiet.

## Structure

- `lib/data.ts` — ALL portfolio content (CV-derived: identity, hero copy, nav links, section registry). Edit content here, not in components. CV source: `doc/*.pdf`, served copy at `public/Dasun_Tharuka_Resume.pdf`.
- `components/layout/Navbar.tsx` — fixed animated navbar; desktop links + mobile overlay menu.
- `components/sections/` — one file per section: Hero (done), About, Experience, Projects, Research, Skills, Contact (placeholders rendering `SectionShell`). To build out a section, replace its `SectionShell` usage with a real layout but keep the section `id` (nav anchors depend on it, registry in `lib/data.ts`).
- `app/page.tsx` — assembles Navbar + sections in order.

## Gotchas

- This is Next.js, NOT Vite — react-bits install notes about `vite.config`/`global.d.ts` do not apply. Assets load from `public/` by URL path.
- react-bits components (added via `pnpm dlx shadcn add @react-bits/...`, registry in components.json) ship WITHOUT `'use client'` — add it manually if the component uses hooks/WebGL, or it breaks the RSC build. `components/Orb.jsx` (OGL, hero backdrop) is one such; its amber tint is the `hue` prop (0–360) in Hero.tsx.
- `components/Lanyard.tsx` contains the meshline JSX type augmentation (`meshLineGeometry`/`meshLineMaterial` typed loosely) — don't add a separate global.d.ts for it.
- Rapier rigid-body refs use `useRef<T>(null!)` because the joint hooks require non-null ref types.
- Run `npx tsc --noEmit` after changes; dev server usually already running on port 3000.
