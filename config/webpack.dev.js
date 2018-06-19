const path = require("path");

module.exports = {
  entry: {
    main: './src/main.js'
  },
  mode: "development", // Two modes avaliable "production" and "developemnt"
  output: {
    filename: "[name]-bundle.js", // [name] is the name of the file
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/js/"
  },
  devServer: {
    contentBase: "dist" // Folder from where webpack-dev-derver will server files via http
  }
}