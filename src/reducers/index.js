import { combineReducers } from 'redux';
import getChangedText from './getChangedText';

export default combineReducers({
  InputReducer: getChangedText
})