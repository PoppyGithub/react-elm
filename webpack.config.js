const HtmlWebPackPlugin = require("html-webpack-plugin");
const pxtorem = require('postcss-pxtorem');//px to rem
const autoprefixer = require('autoprefixer');//浏览器前缀

module.exports = {
    entry:{                             //打包入口文件
        main:'./src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true,
                        camelCase: true,
                        localIdentName: '[local]--[hash:base64:5]'
                    }
                }, {
                    loader: 'sass-loader'
                }, {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            pxtorem({
                                rootValue: 75,
                                propList: ['*']
                            }),
                            autoprefixer({
                                browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 9' // React doesn't support IE8 anyway
                                ],
                                flexbox: 'no-2009'
                            })
                        ]
                    }
                }],
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true,
                        camelCase: true,
                        localIdentName: '[local]--[hash:base64:5]'
                    }
                }, {
                    loader: 'sass-loader'
                }, {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            pxtorem({
                                rootValue: 75,
                                propList: ['*']
                            }),
                            autoprefixer({
                                browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 9' // React doesn't support IE8 anyway
                                ],
                                flexbox: 'no-2009'
                            })
                        ]
                    }
                }],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};