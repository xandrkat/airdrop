import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import history from './history';
import reducer from './Store/reducers/rootReducers';
import * as serviceWorker from './serviceWorker';
import 'fawn-components/lib/fn-pwa-banner';
import 'fawn-components/lib/fn-pwa-status';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  rootElement,
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
