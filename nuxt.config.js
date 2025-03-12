export default {
  // Modo de renderizado (SSR o SPA)
  mode: "universal",

  // Configuración de encabezado
  head: {
    title: "Picnic Page",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "Picnic Page",
        content: "Picnic Page Prueba",
      },
    ],
  },
  css: ["~/assets/css/main.css"],

  // Directorio de archivos estáticos
  // (opcional, por defecto es 'static')
  // dir: {
  //   static: 'static'
  // },
  // Build Configuration
  build: {
    // Config extra de Webpack si la necesitas
  },
};
