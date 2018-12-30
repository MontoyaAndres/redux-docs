const initialState = [];

export default function Cart(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state.concat(action.product);

    case 'REMOVE_FROM_CART':
      return state.filter(product => product.id !== action.product.id);

    default:
      return state;
  }
}
