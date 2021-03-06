const path = require('path')
const MyWebpackPlugin = require('./my-webpack-plugin')

module.exports = {
  mode: 'development',
  entry : {
    main : './src/app.js'
  },
  output : {
    path : path.resolve('./dist'),
    filename: '[name].js'
  },
  module : {
    rules : [
      {
        test : /\.css$/,
        use : [
          'style-loader',
          'css-loader',
          
        ]
      },
      {
        test:/\.(png|jpeg)$/,
        loader : 'url-loader',
        options : {
          publicPath: './dist/',
          name:'[name].[ext]?[hash]',
          limit : 20000,
        }
      }
    ]
  },
  plugins : [ new MyWebpackPlugin(),]
}