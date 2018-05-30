import 'core-js/es6/symbol.js';
import 'core-js/fn/symbol/iterator.js';
// import ReactGA from 'react-ga';
import { injectGlobal } from 'react-emotion/macro';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactGA.initialize('UA-118901514-2');
// ReactGA.pageview('Landing');

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    outline: none;
    font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, 'Segoe UI', SegoeUI, Arial,
      'PingFang TC', 'Microsoft JhengHei', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  li {
    list-style-type: none;
  }
  button {
    background-color: transparent;
    border: none;
  }
  a {
    text-decoration: none;
  }
  body {
    width: 100%;
    overflow-x: hidden;
  }
  br {
    line-height: 0;    
  }

`;

const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}

registerServiceWorker();
