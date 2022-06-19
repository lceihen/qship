const path = require('path')
const webpackBaseOption = require('./webpack.config')
const { merge } = require('webpack-merge')
module.exports = merge(webpackBaseOption, {
  mode: 'development',
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    open: true,
  },
})
