import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// styles
import './style/index.scss';

import store from './app/store';

import AppAgenda from './components';

const App = () => (
  <Provider store={store}>
    <AppAgenda/>
  </Provider>
);

render(<App/>, document.getElementById('root'));
