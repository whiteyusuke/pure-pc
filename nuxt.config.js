
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'ぴゅあらば',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/swiper-bundle.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~plugins/vue-awesome-swiper', mode: 'client' },
    { src: '~/plugins/lazyload.js', mode: 'client' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-purgecss'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: {
      ignoreOrder: true
    },
    optimization: {
      splitChunks: {
        name: true
      }
    },
    filenames: {
      app: () => '[name].js',
      chunk: () => '[name].js',
      css: () => '[name].css',
      img: () => '[path][name].[ext]'
    },
    postcss: {
      plugins: {
        tailwindcss: 'tailwind.config.js'
      }
    },

    purgeCSS: {
      mode: 'postcss',
    },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'vue-awesome-swiper'
    ],
  },
  generate: {
    routes: [
      '/region/1',
      '/region/2',
      '/region/3',
      '/region/4',
      '/region/5',
      '/prefecture/1',
      '/prefecture/2',
      '/prefecture/3',
      '/prefecture/4',
      '/prefecture/5',
    ]
  }
}