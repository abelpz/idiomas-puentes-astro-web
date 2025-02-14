import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from '@astrojs/mdx';
import astroI18next from "astro-i18next";

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    icon({
      include: {
        mdi: ["*"], // This includes all MDI icons
      },
    }),
    mdx(),
    astroI18next()
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
