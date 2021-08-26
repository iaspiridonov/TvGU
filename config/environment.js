const webpack = require('webpack')
const { environment } = require('@rails/webpacker')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

environment.plugins.append(
  'HtmlWebpackPlugin', // arbitrary name
   new HtmlWebpackPlugin(),
);

module.exports = environment