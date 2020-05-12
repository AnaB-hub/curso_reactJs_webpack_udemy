'use strict'

import Title from './App'

import React from 'react'
import { render } from 'react-dom'

render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)