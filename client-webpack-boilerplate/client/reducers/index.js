import {combineReducers} from 'redux';
import user from './userReducer';
import flash from './flashReducer';

export default combineReducers({
  flash,
  user
});