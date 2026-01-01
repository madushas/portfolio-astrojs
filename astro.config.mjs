// @ts-check

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://madusha.dev',
	output: 'server',
	// Explicitly set a non-Cloudflare session driver to avoid the adapter enabling
	// Cloudflare KV sessions (which injects `cloudflare:` imports that fail on local builds).
	session: { driver: 'memory' },
	adapter: cloudflare({
		imageService: 'compile',
		// Disable the local platform proxy during local builds on Windows to avoid
		// runtime attempts to resolve `cloudflare:` protocol imports.
		platformProxy: { enabled: false },
	}),
	integrations: [svelte(), sitemap()],
	image: {
		domains: ['cdn.sanity.io'],
	},
	vite: {
		// Remove `cloudflare:*` externalization to avoid Node ESM trying to resolve the
		// `cloudflare:` protocol during local builds. If you need to externalize
		// Node built-ins, add them explicitly (e.g. ['node:crypto']).
		ssr: {},
		build: {},

		plugins: [tailwindcss()],
	},
});
