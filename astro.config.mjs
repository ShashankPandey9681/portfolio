import { defineConfig } from 'astro/config';

// IMPORTANT: update `site` to your real domain once you buy it.
// This is used for canonical URLs, sitemaps, and RSS.
export default defineConfig({
  site: 'https://ShashankPandey9681.github.io',
  base: '/portfolio',
  build: {
    format: 'directory',
  },
});
