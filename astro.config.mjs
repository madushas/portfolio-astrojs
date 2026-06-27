// @ts-check

import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, sessionDrivers } from "astro/config";

export default defineConfig({
	site: "https://madusha.dev",
	output: "server",
	// Explicitly set a non-Cloudflare session driver to avoid the adapter enabling
	// Cloudflare KV sessions (which injects `cloudflare:` imports that fail on local builds).
	session: { driver: sessionDrivers.cloudflareKVBinding({binding:"SESSION"})  },
	adapter: cloudflare({
		imageService: "compile",
		// Disable the local platform proxy during local builds on Windows to avoid
		// runtime attempts to resolve `cloudflare:` protocol imports.
		prerenderEnvironment:"workerd",
		sessionKVBindingName: "SESSION"
	}),
	integrations: [svelte(), sitemap()],
	image: {
		domains: ["cdn.sanity.io"],
	},
	vite: {
		ssr: {},
		build: {},

		plugins: [tailwindcss()],
	},
});
