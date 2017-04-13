const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/app.js', // 輸入的檔案
    output: {
        path: path.resolve(__dirname, "dist"), // 輸出資料夾位置
        filename: 'app.bundle.js' // 輸出檔案名
    },
    module: {
        rules: [{
            test: /\.scss$\sass$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9527,
        stats: 'errors-only', // 錯誤時跳出訊息在終端機和console中
        open: true // 運行時另開視窗
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo', // 標題名稱 鏈接方式"<title><%= htmlWebpackPlugin.options.title %></title>"
            minify: { //壓縮html
                collapseWhitespace: true // 消除空行
            },
            hash: true, // 加入亂數編碼 
            template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new ExtractTextPlugin({
            filename: 'app.css', // 輸出的css名稱
            disable: false,
            allChunks: true
        })
    ]

}