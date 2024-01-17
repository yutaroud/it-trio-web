import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://it-trio-no.com",
  integrations: [mdx(), sitemap()],
});
