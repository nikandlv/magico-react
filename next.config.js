const withSass = require('@zeit/next-sass')
module.exports = withSass({
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: false,
                name: '../../../static/icon/[name].[ext]'
              }
            }
          })
          config.module.rules.push({
            test: /\.(svg|png|jpg|gif)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: false,
                name: '../../../static/img/[name].[ext]'
              }
            }
          })
        return config
      },
    exportPathMap: function() {
        return {
          '/': { page: '/' },
    }
    },
    assetPrefix: './',
})
