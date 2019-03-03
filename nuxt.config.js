require('dotenv').config()

const client = require('./plugins/contentful')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | A Front End Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Front End, Developer, Web Developer, JavaScript Developer, Web Apps' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'description', name: 'description', content: 'A Front End Developer' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700|Charmonman:400,700' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    'animate.css'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: [
      require('autoprefixer')({
        browsers: ['last 5 versions']
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/contentful'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/bulma',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    [
      'nuxt-sass-resources-loader',
      '@/assets/scss/_variables.scss'
    ],
  ],

  markdownit: {
    injected: true
  },

  generate: {
    routes () {
      return client.getEntries({
        content_type: process.env.CTF_BLOG_POST_TYPE_ID
      }).then(entries => {
        return entries.items.map(entry => {
          return {
            route: entry.fields.slug,
            payload: entry
          }
        })
      })
    }
  }
}
