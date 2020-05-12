'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {

  entry: path.join(__dirname, 'src', 'index'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  devServer: {
    port: 9000
  },

}
