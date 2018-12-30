import { combineReducers } from 'redux';

import cart from './Cart';
import products from './Products';

export default combineReducers({
  cart,
  products
});
