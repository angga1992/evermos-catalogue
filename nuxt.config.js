const pkg = require('./package')
require('dotenv').config()
require('events').EventEmitter.defaultMaxListeners = 53;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  env: {
    HOST_URL: process.env.HOST_URL,
  },
  head: {
    title: 'list_product',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href:"https://fonts.googleapis.com" },
      { rel: "preconnect", href:"https://fonts.gstatic.com"},
      { href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap", rel:"stylesheet"},
      { rel: "stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"}
    ]
  },
  css: [
    '@/assets/custom.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/dotenv"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['nuxt-lazy-load', {
      // These are the default values
      images: true,
      videos: true,
      audios: true,
      iframes: true,
      native: false,
      polyfill: true,
      directiveOnly: false,

      // Default image must be in the static folder
      defaultImage: '/images/default-image.png',

      // To remove class set value to false
      loadingClass: 'isLoading',
      loadedClass: 'isLoaded',
      appendClass: 'lazyLoad',

      observerConfig: {
        // See IntersectionObserver documentation
      }
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    proxyHeadersIgnore: ['host', 'accept', 'cf-ray', 'cf-connecting-ip']
  },

  proxy: {
    '/product': process.env.HOST_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
