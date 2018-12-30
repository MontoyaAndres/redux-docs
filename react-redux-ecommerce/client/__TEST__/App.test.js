import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Redux
import { Provider } from 'react-redux';
import store from '../store';

// Components
import App from '../Components/ProductList';

configure({ adapter: new Adapter() });

it('check it', () => {
  shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
