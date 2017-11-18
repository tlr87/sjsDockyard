import React from 'react'
import ReactDOM from 'react-dom'


const element = <h1>Hello, world</h1>;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    element,
    document.getElementById('app')
)
})
