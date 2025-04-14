const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (styleHandler) => ({
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    ],
    alias: {
      "@styles": path.resolve(__dirname, "../src/styles"),
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
              modules: {
                localIdentName:
                  process.env.NODE_ENV === "production"
                    ? "[hash:base64:5]"
                    : "[local]__[hash:base64:5]",
                exportLocalsConvention: "asIs",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                webpackImporter: true,
                includePaths: [path.resolve(__dirname, "../src/styles")],
              },
            },
          },
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
