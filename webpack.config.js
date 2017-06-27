const webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: {
        index: "./js/index.js",
        vendor: ['./js/lib/properScreen.js','./js/lib/properScreen_css.js'],
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist/assets",
        publicPath: "/assets",            // New
    },
    devServer: {
        contentBase: __dirname + "/src"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
            },
            {
                test:/\.(png)|(jpg)$/,
                loader: "url-loader?limit=50000" //limit参数，代表如果小于大约50k则会自动帮你压缩base64编码的图片
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "commons.js",
            minChunks: 3,   //有三个以上的地方共用到，那就把它抽取处理器另行打包成公共文件
        }),
    ]
};