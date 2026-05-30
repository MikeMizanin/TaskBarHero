export default {
  title: "Taskbar Hero Wiki",
  description: "Base de datos en español", // <--- Acá agregamos la coma
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Héroes', link: '/heroes/knight' } // <--- Barra corregida
    ],
    sidebar: [
      {
        text: 'Guía de Héroes',
        items: [
          { text: 'Knight (Caballero)', link: '/heroes/knight' }, // <--- Barras corregidas
          { text: 'Mage (Mago)', link: '/heroes/mage' }
        ]
      }
    ]
  }
}
