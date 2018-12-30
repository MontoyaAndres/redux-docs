const initialState = [];

export default function Products(state = initialState, action) {
  switch (action.type) {
    case 'REPLACE_PRODUCTS':
      return action.products;

    default:
      return state;
  }
}
