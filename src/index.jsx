// I believe this is necessary to allow some ES2015 APIs to be available in older browsers.
import 'babel-polyfill';
// Despite the fact that this doesn't appear to be "used" in this file, it needs to be required.
// http://stackoverflow.com/questions/35341994/uncaught-referenceerror-react-is-not-defined
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'Reducers/root';
import App from 'Components/App';

let store = createStore(rootReducer);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App')
);
