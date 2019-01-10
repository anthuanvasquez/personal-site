require('dotenv').config()

const client = require('./plugins/contentful')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | A Front End Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Front End, Developer, Web Developer, JavaScript Developer, Web Apps' },
      { hid: 'description', name: 'description', content: 'A Front End Developer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700|Charmonman:400,700' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css' },
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
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/contentful'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    ['nuxt-sass-resources-loader', '@/assets/scss/_variables.scss'],
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
    }
  },

  markdownit: {
    injected: true
  },

  generate: {
    routes () {
      return client.getEntries({
        content_type: 'post'
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
