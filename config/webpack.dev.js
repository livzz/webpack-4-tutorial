const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: ['./src/client/js/main.js']
    },
    mode: "development", // Two modes avaliable "production" and "development"
    output: {
        filename: "[name]-bundle.js", // [name] is the name of the file
        path: path.resolve(__dirname, "../dist"),
    },
    devServer: {
        contentBase: "dist", // Folder from where webpack-dev-derver will server files via http
        overlay: true, // Shows error in the browser with overlay
        hot: true,
        stats: {
            colors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader", // 1: Loades the html and lints the file
                    options: {
                        attrs: ["img:src"]
                    }
                }]
            },
            {
                test: /\.(jpg|gif|png)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "assets/images/[name].[ext]"
                    }
                }]
            },
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader"
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/client/index.html"
        })
    ]
}