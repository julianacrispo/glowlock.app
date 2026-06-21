// @ts-check
import { defineConfig, sessionDrivers } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { sitemapWithCustomPages } from "./src/lib/sitemap/sitemap-with-custom-pages-plugin.ts";

// Separate vite cache dirs so `astro dev` and `astro build`/`check` don't conflict.
const astroCommand = process.argv.slice(2).find((arg) => !arg.startsWith("-"));
const viteCacheDir =
  astroCommand === "dev" || astroCommand === "preview"
    ? "node_modules/.vite-dev"
    : "node_modules/.vite-build";

// https://astro.build/config
export default defineConfig({
  // Production domain — used for canonical URLs, sitemap, and OG tags.
  site: "https://glowlock.app",
  output: "server",
  trailingSlash: "never",
  session: {
    driver: sessionDrivers.lruCache(),
  },
  adapter: vercel({
    imageService: true,
  }),
  integrations: [
    mdx(),
    react(),
    // For SSR-only dynamic routes, edit src/lib/sitemap/get-sitemap-paths.ts.
    ...sitemapWithCustomPages(),
  ],
  vite: {
    cacheDir: viteCacheDir,
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ["xxhash-wasm"],
    },
    server: {
      strictPort: true,
    },
  },
  server: {
    port: 3000,
    open: false,
  },
  devToolbar: {
    enabled: false,
  },
});
