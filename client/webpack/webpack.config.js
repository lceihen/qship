const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/main.tsx'),
  output: {
    filename: 'static/js/bundle.[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/,
        type: 'asset',
        generator: {
          filename: 'static/images/[name][ext][query]',
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          esModule: false,
        },
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

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}
