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

const render = () => {
  ReactDOM.render(
    <div>
      <p>Hello React!</p>
    </div>,
    document.getElementById('app'),
  );
};


// Render React
render();
