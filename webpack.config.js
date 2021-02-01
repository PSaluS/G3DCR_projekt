const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ]
      },
      // {
      //   test: /\.obj$/,
      //   use: [
      //     {
      //       loader: 'url-loader'
      //     }
      //   ]
      // }
      { test: /\.obj$/,
        loader: 'url-loader'
      },
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    stats: {
      colors: true,
      chunks: false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
