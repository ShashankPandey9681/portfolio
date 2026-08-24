# Personal site

A fast, static personal site built with [Astro](https://astro.build): a bio-forward
home, blog with six categories, projects, skills, about, and a contact form. Clean
and editorial — no backend, no gated pages, no ongoing maintenance.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
```

## Two files you'll use constantly

- **`ROADMAP.md`** — what to edit, and where. Start here for any change.
- **`DEPLOY.md`** — step-by-step: GitHub → Cloudflare Pages → Access gating → domain.

## First things to personalize

1. `src/data/site.ts` — your name, role, tagline, email, socials, projects, skills, work.
2. `src/data/categories.ts` — blog category labels and colors (optional).
3. Replace the sample posts in `src/content/blog/` with your own.
4. `astro.config.mjs` — set `site:` to your domain.
5. Follow `DEPLOY.md` to push to GitHub and go live on Cloudflare Pages.

## Stack

Astro · Cloudflare Pages (hosting + auto-deploy) · Formspree (contact form).
All free at personal scale.
