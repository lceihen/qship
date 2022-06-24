const path = require('path')
const os = require('os')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpackBaseOption = require('./webpack.config')
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
//const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const threads = os.cpus().length
const getStyleLoaders = preProcessor => {
    return [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: '../../',
            },
        },
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
    devtool: 'source-map',
    output: {},
    module: {
        rules: [
            {
                test: /\.(ts|js|tsx|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: threads,
                        },
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                            plugins: ['@babel/plugin-transform-runtime'],
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[hash:8].css',
        }),
        new CssMinimizerPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                parallel: threads,
            }),
        ],
    },
})
