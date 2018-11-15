module.exports = {
    /*
    ** Headers of the page
    */
    head: {
      title: '{{ name }}',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '{{ description }}' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },
    /*
    ** Build configuration
    */
    build: {
      /*
      ** Run ESLint on save
      */
      extend (config, { isDev, isClient }) {
        if (isDev && isClient) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: '{{#if eslint}}eslint-loader{{else}}babel-loader',
            exclude: /(node_modules)/
          })
        }
      }
    },
    /**
     * Apps source directory
     */
    srcDir: 'client/',
  }
  
  