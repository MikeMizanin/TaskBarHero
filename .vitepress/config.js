import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TaskBarHero Wiki ES',
  description: 'Wiki en Español de TaskBarHero',

  lang: 'es-ES',

  lastUpdated: true,

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Héroes', link: '/heroes/knight' },
      { text: 'Objetos', link: '/items/' },
      { text: 'Guías', link: '/guides/' },
      { text: 'Tier List', link: '/tier-list/' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Héroes',
        collapsed: false,
        items: [
          { text: 'Knight', link: '/heroes/knight' },
          { text: 'Ranger', link: '/heroes/ranger' },
          { text: 'Sorcerer', link: '/heroes/sorcerer' },
          { text: 'Priest', link: '/heroes/priest' },
          { text: 'Hunter', link: '/heroes/hunter' },
          { text: 'Slayer', link: '/heroes/slayer' }
        ]
      },

      {
        text: 'Objetos',
        collapsed: true,
        items: [
          { text: 'Todas las Rarezas', link: '/items/' }
        ]
      },

      {
        text: 'Guías',
        collapsed: true,
        items: [
          { text: 'Principiantes', link: '/guides/beginners' },
          { text: 'AFK Farm', link: '/guides/afk-farm' },
          { text: 'Boss Guide', link: '/guides/boss-guide' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mikemizanin/TaskBarHero' }
    ],

    footer: {
      message: 'TaskBarHero Wiki Español',
      copyright: 'Proyecto de la comunidad'
    }
  }
})
