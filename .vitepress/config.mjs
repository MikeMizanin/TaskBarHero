import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TaskBarHero Wiki ES',
  description: 'Wiki en Español de TaskBarHero',

  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Héroes', link: '/heroes/knight' }
    ],

    sidebar: [
      {
        text: 'Héroes',
        items: [
          { text: 'Knight', link: '/heroes/knight' }
        ]
      }
    ]
  }
})
