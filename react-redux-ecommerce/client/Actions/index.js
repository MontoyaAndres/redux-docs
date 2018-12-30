import axios from 'axios';

export const addToCart = product => ({
  type: 'ADD_TO_CART',
  product
});

export const removeFromCart = product => ({
  type: 'REMOVE_FROM_CART',
  product
});

export const loadProducts = () => dispath =>
  axios.get('http://localhost:3000/').then(res => {
    dispath({
      type: 'REPLACE_PRODUCTS',
      products: res.data.products
    });
  });
