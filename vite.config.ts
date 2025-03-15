// import {paraglide} from '@inlang/paraglide-sveltekit/vite';
import {paraglideVitePlugin} from '@inlang/paraglide-js';
import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [
    sveltekit(), paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/lib/paraglide',
      strategy: ['cookie', 'preferredLanguage', 'baseLocale'],
      // urlPatterns: [
      //   {
      //     pattern: ':protocol://:domain(.*)::port?/api/:path(.*)?',
      //     deLocalizedNamedGroups: {locale: null},
      //     localizedNamedGroups: {},
      //   },
      //   {
      //     pattern:
      //     ':protocol://:domain(.*)::port?/:locale(en|de)?/:path(.*)?',
      //     deLocalizedNamedGroups: {locale: null},
      //     localizedNamedGroups: {en: {locale: 'en'}, de: {locale: 'de'}},
      //   },
      // ],
    })
  ]
});
