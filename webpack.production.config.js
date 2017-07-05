/**
 * Created by yanshan on 2017/7/5.
 */

let webpack = require('webpack');

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
        path: __dirname + "/dist/assets",
        filename: "[name].bundle.js",
        publicPath: "/assets/",
    },
    devServer: {
        contentBase: __dirname + "/src",
        inline: true,
        port: 3000
    },
    module: {
        loaders:[
            { test: /\.jsx?$/, exclude: /node_modules/,
                loader: 'babel-loader', query: { presets: ['es2015'] }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            { test:/\.(png|jpg)$/, loader: 'url-loader?limit:500000'},
            { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader?limit=10000&name=[path][name].[hash:7].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),  //进行压缩
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV:JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "commons.js",
            minChunks: 3,
        }),
    ]
};