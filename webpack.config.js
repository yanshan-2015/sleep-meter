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
        filename: "js/[name].bundle.js",
    },
    devServer: {
        contentBase: __dirname +'/src',
        port: 3000,
    },
    resolve: {
        alias: {
            'jquery': __dirname +'/src/js/lib/jQuery1.11.3.min.js'
        }
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
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
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
            chunks: ['index','vendor'], 
        }),
        new HtmlWebpackPlugin({
            filename: 'views/male-body.html',
            template: 'views/male-body.html',
            chunks: ['male','vendor'], 
        }),
        new HtmlWebpackPlugin({
            filename: 'views/female-body.html',
            template: 'views/female-body.html',
            chunks: ['female','vendor'], 
        }),
        new HtmlWebpackPlugin({
            filename: 'views/height.html',
            template: 'views/height.html',
            chunks: ['height','vendor'], 
        }),
        new HtmlWebpackPlugin({
            filename: 'views/weight.html',
            template: 'views/weight.html',
            chunks: ['weight','vendor'], 
        }),
        new HtmlWebpackPlugin({
            filename: 'views/shoulder.html',
            template: 'views/shoulder.html',
            chunks: ['shoulder','vendor'], 
        }),
        new HtmlWebpackPlugin({
            filename: 'views/waistline.html',
            template: 'views/waistline.html',
            chunks: ['waistline','vendor'], 
        }),
        new HtmlWebpackPlugin({
            filename: 'views/hipline.html',
            template: 'views/hipline.html',
            chunks: ['hipline','vendor'], 
        }),
        new HtmlWebpackPlugin({
            filename: 'views/report.html',
            template: 'views/report.html',
            chunks: ['report','vendor'], 
        }),

        new OpenBrowserPlugin({
            url: 'http://localhost:3000/views/index.html'
        }),

        new FriendlyErrorsPlugin()
    ]
};