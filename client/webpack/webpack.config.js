const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// {
//     test: /\.html$/i,
//     loader: 'html-loader',
//     options: {
//       esModule: false,
//     },
//   },
module.exports = {
  entry: path.resolve(__dirname, '../src/main.tsx'),
  output: {
    filename: 'static/js/bundle.[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '',
    assetModuleFilename: 'static/images/[name][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/,
        type: 'asset',
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[hash:8][ext][query]',
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
