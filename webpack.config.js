const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "To Do",
      template: "./src/template.html",
      favicon: "./src/icons/favicon.ico",
      filename: "./index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      }
    ]
  },
  devtool: "inline-source-map"
};
