const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (styleHandler) => ({
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.module\.scss$/,
        use: [
          styleHandler,
          {
            loader: "css-loader",
            options: {
              esModule: false,
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [styleHandler, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
});
