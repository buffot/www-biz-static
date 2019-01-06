const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const projects = [
  'alterans',
  'abot',
  'tipiux',
  'devconf',
  'focusboard',
  'polanddeals',
  'dgtmarket',
  'gotar',
  'article',
  'certace',
  'trug',
];

module.exports = {
  entry: {
    index: './src/index.js',
    about: './src/index.js'
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
        options: {
            presets: ['env']
        }
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
      template: './src/index.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/projects/alterans.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'alterans.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/projects/abot.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'abot.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/projects/tipiux.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'tipiux.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/projects/devconf.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'devconf.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/projects/focusboard.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'focusboard.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/projects/polanddeals.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'polanddeals.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/projects/dgtmarket.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'dgtmarket.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/projects/gotar.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'gotar.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/projects/article.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'article.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/projects/certace.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'certace.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/projects/trug.hbs',
      inject: true,
      chunks: ['index'],
      filename: 'trug.html'
    }),
  ]
};
