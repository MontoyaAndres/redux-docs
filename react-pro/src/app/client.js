import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

// Redux Store
import configStore from '../shared/configStore';

// Container
import App from './App';

// Configuration redux store
const store = configStore(window.initialState);

// App wrapper
const renderApp = Component => {
  hydrate(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  );
};

// Rendering App
renderApp(App);

// react-hot-loader
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(require('./App').default);
  });
}
