import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Root Reducer
import rootReducer from './reducers';

export default function configStore(initialState) {
  const middleware = [
    thunk
  ];

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}
