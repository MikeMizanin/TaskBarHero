export default {
  title: "Taskbar Hero Wiki",
  description: "Base de datos en español",
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Héroes', link: '/heroes/knight' }
    ],
    sidebar: [
      {
        text: 'Guía de Héroes',
        items: [
          { text: 'Knight (Caballero)', link: '/heroes/knight' },
          { text: 'Mage (Mago)', link: '/heroes/mage' }
        ]
      }
    ]
  }
}
