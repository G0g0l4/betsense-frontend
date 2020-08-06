const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "./web/js/app.js"),
    style: path.resolve(__dirname, "./scss/style.scss"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./web/bundle"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["latest"] },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {},
            },
            {
              loader: "sass-loader",
              options: {},
            },
          ],
          fallback: "style-loader",
        }),
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true,
    }),
  ],
  devtool: "source-map",
};
