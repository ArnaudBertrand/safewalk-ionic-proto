const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',

  entry: './src/app.js',

  output: {
    filename: 'app.js',
    path: __dirname + '/www/js'
  },

  resolve: {
    root: __dirname,
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.json$/, exclude: /node_modules/, loader: 'json-loader'},
      {test: /\.s[a|c]ss$/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader!sass-loader']},
      {test: /\.(png|jpg|svg)$/, exclude: /node_modules/, loader: 'url'},
      {test: /\.css$/, loaders: ['style-loader', 'css-loader'], exclude: /node_modules/},
      {test: /\.(eot|ttf|woff|svg)\??.*$/, loader: 'url', exclude: /node_modules/}
    ]
  }
};
