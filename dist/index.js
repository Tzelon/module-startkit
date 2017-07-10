/**
 * index.js
 *
 * This is the entry file for the module in dev environment
 */
// Needed for es6 generator support
import 'babel-polyfill';
// Import react
import React from 'react';
import ReactDOM from 'react-dom';

var render = function render() {
  ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Hello React!'
    )
  ), document.getElementById('app'));
};

// Render React
render();