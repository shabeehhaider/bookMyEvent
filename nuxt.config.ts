// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@splidejs/splide/dist/css/splide.min.css',
    'bootstrap/dist/css/bootstrap.css',
  ],
  plugins: [
    { src: '~/plugins/splide.client.js', mode: 'client' },
    { src: '~/plugins/bootstrap.ts', mode: 'client' }
  ],
  build: {
    transpile: ['@splidejs/vue-splide'],
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'shortcut icon', href: '/favicon.png' }
      ]
    }
  }
})
