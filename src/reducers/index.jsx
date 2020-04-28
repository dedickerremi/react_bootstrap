import { combineReducers } from 'redux';
import bundles from './bundleReducers';

const rootReducer = combineReducers({
  bundles
});
  
export default rootReducer;