// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  site: 'https://marcelOlecram.github.io',
  base: 'arcmoel-personal-portfolio',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es']
  }
});