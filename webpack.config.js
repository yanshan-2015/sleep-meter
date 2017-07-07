/**
 * Created by yanshan on 2017/7/5.
 */

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');
let FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    context: __dirname + "/src",
    entry: {
        index: "./js/index.js",
        male: './js/male-body.js',
        female: './js/female-body.js',
        height: './js/height.js',
        weight: './js/weight.js',
        shoulder: './js/shoulder.js',
        waistline: './js/waistline.js',
        hipline: './js/hipline.js',
        report: './js/report.js',
        vendor: ['./js/lib/properScreen.js','./js/lib/properScreen_css.js'],
    },
    output: {
        path: __dirname + "/public",
        filename: "js/[name].js",
    },
    devServer: {
        contentBase: __dirname +'/src',
        port: 3000,
    },
    module: {
        loaders:[
            {
                test: /\.html$/,
                loader: "html-loader?-minimize",
                options: {
                    attrs:'img:src img:data-src'
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                loader:  ['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(png|jpg)$/,
                loader: 'url-loader',
                options: { limit: 1048576 }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: { limit: 1048576 }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV:JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "js/commons.js",
            minChunks: 3,
        }),

        new HtmlWebpackPlugin({
            filename: 'views/index.html',
            template: 'views/index.html',
            inject: true,  //js位于底部。inject为false时,不插入js
            chunks: ['index','vendor'], //所需js
            chunksSortMode: 'dependency', //按照一来关系排序script
        }),

        new OpenBrowserPlugin({
            url: 'http://localhost:3000/views/index.html'
        }),

        new FriendlyErrorsPlugin()
    ]
};