import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// store redux
import store from './store';

// Main component
import App from './Components/App';

// Actions
import { loadProducts } from './Actions';

// Load products
store.dispatch(loadProducts());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
