const pkg = require('./package')
const StyleLintPlugin = require('stylelint-webpack-plugin')
require('dotenv').config()

module.exports = {
  mode: 'spa',
  server: {
    port: 3333,
    host: 'localhost'
  },
  env: {
    apiHost: process.env.API_HOST,
    imagesHost: process.env.IMAGES_HOST
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ],
    script: [
      { src: 'https://www.google.com/recaptcha/api.js' }
    ]
  },

  css: [
    '~/assets/scss/main.scss'
  ],

  plugins: [
    '@/plugins/vuetify'
  ],

  workbox: {

  },

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    filenames: {
      chunk: ({ isDev }) => isDev ? '[name].js' : '[id].[chunkhash].js'
    },
    extend (config, { isDev }) {

      if (isDev) {
        config.devtool = '#source-map'
      }

      config.plugins.push(
          new StyleLintPlugin({
            files: '**/*.{vue,scss}',
          })
      )
    }
  }
}
