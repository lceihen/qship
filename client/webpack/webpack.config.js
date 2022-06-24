const path = require('path')
const os = require('os')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const threads = os.cpus().length
console.log('os', threads)
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
                test: /\.(ttf|woff2?|map4|map3|avi)$/,
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
        new ESLintPlugin({
            extensions: ['.js', '.ts', '.tsx', '.jsx'],
            context: path.resolve(__dirname, '../src'),
            exclude: 'node_modules',
            cache: true,
            cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'),
            threads,
        }),
    ],

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
}
