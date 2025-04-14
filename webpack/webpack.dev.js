const { merge } = require("webpack-merge");
const getCommonConfig = require("./webpack.common.js");

module.exports = merge(getCommonConfig("style-loader"), {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
    hot: true,
    liveReload: true,
  },
});
