// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
  base: '/critiques',
  integrations: [
    starlight({
      title: 'Homepage',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
      sidebar: [
        {
          label: 'Souvenir snacks',
          autogenerate: { directory: 'snacks' },
          //   items: [
          //     // Each item here is one entry in the navigation menu.
          //     { label: 'Souvenir snacks', slug: 'snacks' },
          //   ],
        },
        // {
        //   label: 'Reference',
        //   autogenerate: { directory: 'reference' },
        // },
      ],
      plugins: [
        catppuccin({
          dark: { flavor: 'macchiato', accent: 'pink' },
          light: { flavor: 'latte', accent: 'pink' },
        }),
      ],
    }),
  ],
});
