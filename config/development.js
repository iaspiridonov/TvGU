process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  inject: 'body',
  alwaysWriteToDisk: true
});

environment.plugins.get('HtmlWebpackPlugin')

module.exports = environment.toWebpackConfig()

module.exports.devServer = {
  clientLogLevel: 'none',
  compress: true,
  quiet: false,
  disableHostCheck: true,
  host: 'localhost',
  port: 3035,
  https: false,
  hot: false,
  contentBase: 'src/',
  inline: true,
  useLocalIp: false,
  public: 'localhost:3035',
  publicPath: '/packs/',
  historyApiFallback: true,
}

// module.exports.output = {
//   filename: 'js/[name].js',
//   chunkFilename: 'js/[name].chunk.js',
//   hotUpdateChunkFilename: 'js/[id]-[hash].hot-update.js',
//   path: 'public/packs',
//   publicPath: '/packs/'
// }

console.log(module)