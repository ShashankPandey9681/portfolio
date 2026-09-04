import { defineConfig } from 'astro/config';

// Canonical URL for the site — used for sitemaps, RSS, and canonical tags.
export default defineConfig({
  site: 'https://www.spandey.com',
  build: {
    format: 'directory',
  },
});
