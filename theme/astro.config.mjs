import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import lit from "@astrojs/lit";
import partytown from "@astrojs/partytown";


// https://astro.build/config
export default defineConfig({
  site: 'https://seakayakgt.org/',
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  sitemap: true,
  // Generate sitemap (set to "false" to disable)
  integrations: [robotsTxt(),sitemap(), mdx(), image(), lit(), partytown({config: {forward: ["dataLayer.push"]}})],
  // This is for the astro-icon package. You can find more about the package here: https://www.npmjs.com/package/astro-icon
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});