// Here the code and import order is necessary

import express from "express";
import path from "path";
import webpack from "webpack"
import config from "../../config/webpack.dev.js"

const staticMiddleware = express.static("dist")

const compiler = webpack(config)
const webpackDevMiddleware = require("webpack-dev-middleware")(compiler, config.devServer);
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

const server = express()
server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);

server.use(staticMiddleware);

server.listen(8080, () => {
  console.log("Listening at 8080")
})