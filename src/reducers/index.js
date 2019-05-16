import { combineReducers } from 'redux';
import colasReducer from './colasReducer';

export default combineReducers({
  colas: colasReducer
});
