const path = require('path')
const webpackBaseOption = require('./webpack.config')
const { merge } = require('webpack-merge')
module.exports = merge(webpackBaseOption, {
  mode: 'production',
})
