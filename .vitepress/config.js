import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TaskBarHero Wiki ES',
  description: 'La Wiki en Español de TaskBarHero',

  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Héroes', link: '/heroes/knight' }
    ],

    sidebar: [
      {
        text: 'Héroes',
        items: [
          { text: 'Knight', link: '/heroes/knight' },
          { text: 'Ranger', link: '/heroes/ranger' },
          { text: 'Sorcerer', link: '/heroes/sorcerer' },
          { text: 'Priest', link: '/heroes/priest' },
          { text: 'Hunter', link: '/heroes/hunter' },
          { text: 'Slayer', link: '/heroes/slayer' }
        ]
      }
    ]
  }
})
