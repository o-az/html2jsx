const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const { webpack } = require("webpack");

module.exports = {
  entry: ["react-hot-loader/patch", path.resolve(__dirname, "./src/index.js")],
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3001,
    contentBase: path.resolve(__dirname, "./dist"),
    watchContentBase: true,
    hot: true,
  },
  // Rules of how webpack will take our files, complie & bundle them for the
  // browser
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    //new HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
};
