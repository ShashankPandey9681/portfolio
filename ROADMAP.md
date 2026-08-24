# ROADMAP — what to edit, where

This is the single source of truth for changing the site. When you (or an AI
assistant) want to change something, start here. Every task below names the exact
file to open.

---

## Identity & the basics

| I want to change...              | Open this file          | Edit this           |
| -------------------------------- | ----------------------- | ------------------- |
| My name, role, tagline, email    | `src/data/site.ts`      | the `site` object   |
| Home hero bio paragraph          | `src/data/site.ts`      | `site.intro`        |
| Social links (LinkedIn, X, etc.) | `src/data/site.ts`      | `site.socials`      |
| The nav bar links / order        | `src/data/site.ts`      | the `nav` array     |
| Home carousel images             | `public/images/` + `src/data/site.ts` | drop files in, list them in `homeImages` |
| Contact form destination         | `src/data/site.ts`      | `site.formspreeId`  |
| Site domain (for SEO/canonical)  | `astro.config.mjs`      | the `site:` value   |
| Favicon                          | `public/favicon.svg`    | the SVG             |

## Writing & blog

| I want to...                     | Do this                                                        |
| -------------------------------- | ------------------------------------------------------------- |
| **Publish a new post**           | Add a `.md` file to `src/content/blog/` (see template below)   |
| Hide a post without deleting     | Set `draft: true` in its frontmatter                           |
| Rename / recolor a category      | `src/data/categories.ts` (label + color)                      |
| Add / remove a category          | Edit **both** `src/content/config.ts` and `src/data/categories.ts` |

**New post template** — create `src/content/blog/my-post.md`:

```markdown
---
title: "Your title"
description: "One-line summary shown in listings."
date: 2026-03-15
category: "ai"   # product-management | ai | innovation | productivity | life | mens-mental-health
draft: false
---

Your post body in Markdown.
```

The filename becomes the URL: `my-post.md` -> `/blog/my-post`.

## Projects, skills, work history

| I want to change... | Open this file       | Edit this          |
| ------------------- | -------------------- | ------------------ |
| Projects            | `src/data/site.ts`   | the `projects` array |
| Skills              | `src/data/site.ts`   | the `skills` array   |
| Work timeline       | `src/data/site.ts`   | the `work` array     |

## Page copy

| Page          | File                          |
| ------------- | ----------------------------- |
| Home          | `src/pages/index.astro`       |
| About / bio   | `src/pages/about.astro`       |
| Contact intro | `src/pages/contact.astro`     |
| 404           | `src/pages/404.astro`         |

## Change the theme (colors & fonts)

Everything visual is controlled by CSS variables at the top of
`src/styles/global.css` (the `:root` block): paper, ink, accent, borders, and the
three fonts (`--font-display`, `--font-body`, `--font-mono`). Change a value once
and it updates everywhere. To swap fonts, also update the Google Fonts `<link>` in
`src/layouts/Base.astro`.

---

## Run it locally

```bash
npm install     # first time only
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
```
