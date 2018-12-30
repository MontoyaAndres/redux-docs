import { combineReducers } from 'redux';

// Containers Reducers
import blog from '../../app/components/Blog/reducer';

// Shared Reducers
import device from './deviceReducer';

const routeReducer = combineReducers({
  blog,
  device
});

export default routeReducer;
