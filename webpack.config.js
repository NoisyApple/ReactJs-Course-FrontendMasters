const HtmlWebpackPlugin = require("html-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  context: __dirname,
  entry: {
    app: ["./src/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "bundle.js",
    publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new EslintWebpackPlugin({
      files: "**/*.js",
    }),
  ],
  devServer: {
    publicPath: "/server/",
    port: 4040,
  },
};
