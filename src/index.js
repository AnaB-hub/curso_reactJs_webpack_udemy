'use strict'

var React = require('react')
var ReactDOM = require('react-dom')
var Title = require('./App')

ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)