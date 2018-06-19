const path = require("path");

module.exports = {
  entry: {
    main: './src/js/main.js'
  },
  mode: "development", // Two modes avaliable "production" and "developemnt"
  output: {
    filename: "[name]-bundle.js", // [name] is the name of the file
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist", // Folder from where webpack-dev-derver will server files via http
    overlay: true // Shows error in the browser with overlay
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        }
      ]
    }, {
      test: /\.html$/,
      use: [{
          loader: "file-loader", // 3: Create the html file
          options: {
            name: "[name].html"
          },
        }, {
          loader: "extract-loader" // 2: Extract as seperate file and doesnot include in bundle
        },
        {
          loader: "html-loader", // 1: Loades the html and lints the file
          options: {
            attrs: ["img:src"]
          }
        }
      ]
    }, {
      test: /\.(jpg|gif|png)$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "assets/images/[name].[ext]"
        }
      }]
    }, {
      test: /\.js$/,
      use: [{
        loader: "babel-loader"
      }],
      exclude: /node_modules/
    }]
  }
}