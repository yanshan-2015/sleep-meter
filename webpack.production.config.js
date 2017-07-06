/**
 * Created by yanshan on 2017/7/5.
 */

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

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
        path: __dirname + "/dist/www\.sleep\.com/",
        filename: "js/[name].bundle.js",
        publicPath: "../",
    },
    devServer: {
        contentBase: __dirname + "/src",
        inline: true,
        port: 3000
    },
    module: {
        loaders:[
            {
                test: /\.html$/,
                loader: "html-loader",
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
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','less-loader']
                }),
            },
            {
                test:/\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 1048576,
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1048576,
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'慕思睡眠测试系统',
            filename: 'views/index.html',
            template: 'views/index.html',
            inject: true,  //js位于底部。inject为false时,不插入js
            minify: false,
            hash: false,
            chunks: ['index','vendor'], //所需js
            chunksSortMode: 'dependency', //按照一来关系排序script
            excludeChunks: ['commons.js','index.bundle.js']
        }),

        new HtmlWebpackPlugin({
            title:'慕思睡眠测试系统',
            filename: 'views/female-body.html',
            template: 'views/female-body.html',
            inject: true,  //js位于底部。inject为false时,不插入js
            minify: false,
            hash: false,
            chunks: ['female','vendor'], //所需js
            chunksSortMode: 'dependency', //按照一来关系排序script
        }),

        new HtmlWebpackPlugin({
            title:'慕思睡眠测试系统',
            filename: 'views/male-body.html',
            template: 'views/male-body.html',
            inject: true,  //js位于底部。inject为false时,不插入js
            minify: false,
            hash: false,
            chunks: ['male','vendor'], //所需js
            chunksSortMode: 'dependency', //按照一来关系排序script
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),  //进行压缩

        /*new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV:JSON.stringify('production')
            }
        }),*/
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "js/commons.js",
            minChunks: 3,
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css'
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        })
    ]
};