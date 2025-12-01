// @ts-check

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://madusha.dev',
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
  }),
  integrations: [svelte(), sitemap()],
  image: {
    domains: ['cdn.sanity.io'],
  },
  vite: {
    ssr: {
      external: ['cloudflare:*'],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },

    plugins: [tailwindcss()],
  },
});
