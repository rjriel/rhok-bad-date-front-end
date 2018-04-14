/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './components/App';

/* eslint-disable */
injectGlobal`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    /* font-size: 16px; */
    line-height: 1.7;
    color: #777;
    padding: 3rem;
    box-sizing: border-box;
  }
`;
/* eslint-enable */

ReactDOM.render(
  <App />
  , document.querySelector('.app'),
);
