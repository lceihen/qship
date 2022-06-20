const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackBaseOption = require('./webpack.config')
const { merge } = require('webpack-merge')

// parser: {
//         dataUrlCondition: {
//           maxSize: 10 * 1024,
//         },
//       },
const getStyleLoaders = (preProcessor) => {
  return [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            [
              'postcss-preset-env',
              {
                autoprefixer: {
                  flexbox: 'no-2009',
                },
                stage: 3,
              },
            ],
          ],
        },
      },
    },

    ,
    preProcessor,
  ].filter(Boolean)
}
module.exports = merge(webpackBaseOption, {
  mode: 'production',
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
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash:8].css',
    }),
  ],
})
