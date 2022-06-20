const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const getStyleLoaders = (preProcessor) => {
  return [
    'style-loader',
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
module.exports = {
  entry: path.resolve(__dirname, '../src/main.tsx'),
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
    new HtmlWebpackPlugin({
      title: 'qship',
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      inject: 'body',
    }),
  ],
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}
