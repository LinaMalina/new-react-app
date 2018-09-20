import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/configureStore';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
  );
  }
}
render(<App />, document.getElementById('root'));
registerServiceWorker();
