import React from 'react';
import { render, configure, mount } from 'enzyme';
import configStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

// Components
import ProductList from '../../Components/ProductList';

configure({ adapter: new Adapter() });

const mockStore = configStore();

it('renders no products when store is empty', () => {
  const store = mockStore({ products: [] });

  const wrapper = render(<ProductList store={store} />);
  expect(wrapper.find('.caption').length).toBe(0);
});

it('renders products', () => {
  const store = mockStore({
    products: [{ id: 1, name: 'Hello world', price: 100, image: '' }]
  });

  const wrapper = render(<ProductList store={store} />);
  expect(wrapper.find('.thumbnail').length).toBe(1);
});

it('adds a product to shopping cart', () => {
  const store = mockStore({
    products: [{ id: 1, name: 'Hello world', price: 100, image: '' }]
  });

  const wrapper = mount(<ProductList store={store} />);
  wrapper.find('button').simulate('click');

  const actions = store.getActions();
  expect(actions.length).toBe(1);
  expect(actions[0].type).toBe('ADD_TO_CART');
  expect(actions[0].product).not.toBeNull();
});
