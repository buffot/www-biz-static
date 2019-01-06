const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const projects = require('./projects');
const {prepareProjectPages} = require('./webpack-utils');

module.exports = {
  entry: {
    index: './src/index.js',
  },

  devServer: {
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "handlebars-loader",
            query: {
              partialDirs: [
                  path.join(__dirname, 'src', 'templates')
              ]
            }
          },
          {loader: 'extract-loader'},
          {
            loader: 'html-loader',
            options: {
              interpolate: true,
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              useRelativePath: true,
            }
        }]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.hbs`,
      inject: true,
      chunks: ['index'],
      filename: `index.html`,
    }),
    ...prepareProjectPages(projects),
  ]
};
