import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducer
import reducer from './Reducers';

// Redux DevTools
const DEVELOPMENT = 'development';
const enviromentDev = process.env.NODE_ENV === DEVELOPMENT;
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = enviromentDev && reduxDevTools ? reduxDevTools : compose;

const createStoreMiddleware = composeEnhancers(applyMiddleware(thunk))(createStore);

export default createStoreMiddleware(reducer);
