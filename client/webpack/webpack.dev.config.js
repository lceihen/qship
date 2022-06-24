const path = require('path')
const webpackBaseOption = require('./webpack.config')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { merge } = require('webpack-merge')
const getStyleLoaders = preProcessor => {
    return ['style-loader', 'css-loader', preProcessor].filter(Boolean)
}

module.exports = merge(webpackBaseOption, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    cacheCompression: false,
                },
            },
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [require.resolve('react-refresh/babel')],
                        },
                    },
                ],
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
    plugins: [new ReactRefreshWebpackPlugin()],
})
