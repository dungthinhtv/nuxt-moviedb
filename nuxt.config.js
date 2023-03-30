import colors from 'vuetify/es5/util/colors';
require('dotenv').config()

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  mode: 'universal',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - HD Movies Store',
    title: 'Ratings, Reviews, and Where to Watch the Best Movies & TV Shows',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "This is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows." },
      { hid: 'keywords', name: 'keywords', content: 'news, movies, films, television, TV, celebrities, hollywood, stars, actors, actresses, directors' },
      { hid: 'og:title', name: 'og:title', content:  'Ratings, Reviews, and Where to Watch the Best Movies & TV Shows - HD Movies Store'},
      { hid: 'og:description', name: 'og:description', content: "This is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows."},
      { hid: 'og:image', name: 'og:image', content: '/thumbnail.jpg' },
      { hid: 'og:type', name: 'og:type', content: 'video.movie' },
      { hid: 'og:locale', name: 'og:locale', content: 'en_US' },
      { hid: 'og:url', name: 'og:url', content: 'https://www.dungthinh.com' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'HD Movies Store' },

      // { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          {rel:'dns-prefetch',href:'//www.google-analytics.com'},
          {rel:'dns-prefetch',href:'//www.gstatic.com'},
          {rel:'dns-prefetch',href:'//fonts.gstatic.com'},
          {rel:'dns-prefetch', href:'//cdnjs.cloudflare.com'},
          {rel:'dns-prefetch', href:'//static.zdassets.com'},
          {rel:'dns-prefetch', href:'//s7.addthis.com'},
          {rel:'dns-prefetch', href:'//connect.facebook.net'},
          {rel:'dns-prefetch', href:'//graph.facebook.com'},
        ],
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
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap','@nuxtjs/dotenv'],

  sitemap: {
    hostname: 'https://dungthinh.com',
    gzip: true,
    // exclude: ['/exampleurl']
 },

  axios: {
    // proxy: true
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      common: {
        Authorization: `Bearer ${process.env.tokenTMDB}`,
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
  build: {
  },
};
