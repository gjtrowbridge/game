// I believe this is necessary to allow some ES2015 APIs to be available in older browsers.
import 'babel-polyfill';
// Despite the fact that this doesn't appear to be "used" in this file, it needs to be required.
// http://stackoverflow.com/questions/35341994/uncaught-referenceerror-react-is-not-defined
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'Reducers/root';
import App from 'Components/App';
import reduxThunk from 'redux-thunk';
import { HashRouter, Route, Switch } from 'react-router-dom';

let store = createStore(
  rootReducer,
  applyMiddleware(
    reduxThunk,
  ),
);

ReactDom.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('App')
);
