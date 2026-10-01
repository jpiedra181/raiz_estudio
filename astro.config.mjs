// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://raizestudiodesign.es',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  image: {
    // Remote images are downloaded and optimised at build time (AVIF/WebP + srcset)
    domains: ['images.unsplash.com'],
    responsiveStyles: false,
  },
  build: {
    inlineStylesheets: 'always',
  },
});
