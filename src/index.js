/* global document */
import React from 'react';
import ReactDOM from 'react-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { injectGlobal } from 'styled-components';

import App from './components/App';

/* eslint-disable */
injectGlobal`
  body {
    color: #fff;
    background-color: #333;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
/* eslint-enable */

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <App />
  </MuiThemeProvider>
  , document.querySelector('.app'),
);
