const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const entryList = require('./entrylist.config');

function generateHtmlWebpackPlugins(list) {
  const plugins = [];
  for (let e of list) {
    plugins.push(new HtmlWebpackPlugin({
      template: `./src/views/${e}.html`,
      filename: `views/${e}.html`,
      chunks: ['libs', 'common', `${e}`]
    }));
  }
  return plugins;
}

function generateEntrys(list) {
  const entrys = {};
  for (let e of list) {
    entrys[`${e}`] = `./src/js/${e}.js`;
  }
  return entrys;
}

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: generateEntrys(entryList),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[chunkhash].js'
  },
  //devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['build'], { root: path.resolve(__dirname, '..') }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['libs', 'common'],
      minChunks: 3
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    ...generateHtmlWebpackPlugins(entryList),
  ], // plugins
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[hash].[ext]',
              publicPath: '../',
              outputPath: 'img/',
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      },
    ],
  },
};