const path = require('path')
const webpackBaseOption = require('./webpack.config')
const { merge } = require('webpack-merge')
const getStyleLoaders = (preProcessor) => {
  return ['style-loader', 'css-loader', preProcessor].filter(Boolean)
}
module.exports = merge(webpackBaseOption, {
  mode: 'development',
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js|tsx|ts)$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: getStyleLoaders(''),
      },
      {
        test: /\.(scss|sass)$/i,
        use: getStyleLoaders('sass-loader'),
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        type: 'asset',
      },
    ],
  },
})
