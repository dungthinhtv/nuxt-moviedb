import colors from 'vuetify/es5/util/colors';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjgyZDMzZmYzNGEyNjU5MGMyOWFhZWYzZDA5ZjI3YyIsInN1YiI6IjYzMjljZjA4YzUxYWNkMDA3YTg2ZWJmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2sAQNSLqAnmY6tR8jFPhxYf7OK52ddljA2aifkLWdRI';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - KhoPhim',
    title:
      'KhoPhim - Watch movies and Series online free in Full HD on many devices',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Full Movies Online Streaming and Tv Shows Streaming At no cost - Fast and Free with Great support on many devices - Chromecast supported - Safe Private streaming',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/loadFirstData.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
  ],

  googleAnalytics: {
    id: 'UA-12301-2',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap'],

  i18n: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
  },
  sitemap: {
    hostname: 'https://dungthinh.com',
    // shortcut notation (basic)
    i18n: true,
    // nuxt-i18n notation (advanced)
    i18n: {
      locales: ['en', 'es', 'fr'],
      routesNameSeparator: '___',
    },
  },

  axios: {
    // proxy: true
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      common: {
        Authorization: `Bearer ${token}`,
      },
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: [],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
