import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { contactsCleanFormMiddleware } from '../middlewares/contacts';

import reducers from '../Reducers';

const DEVELOPMENT = 'development';
const enviromentDev = process.env.NODE_ENV === DEVELOPMENT;
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = enviromentDev && reduxDevTools ? reduxDevTools : compose;

const createStoreMiddleware = composeEnhancers(
  applyMiddleware(thunk, contactsCleanFormMiddleware)
)(createStore);

export default createStoreMiddleware(reducers);
