import {TEXT_CHANGED, ADD_BLOCK, REMOVE_BLOCK, GET_DEFAULT_VALUE_SUCCESS} from '../store/actionTypes';
import initialState from '../store/initialState';
import injectReducer from './../store/injectReducer';


export default injectReducer(initialState.InputReducer, {
  [TEXT_CHANGED]: (state, { payload, id }) => ({
    ...state,
    [id]: {
      value: payload
    },
  }),
  [ADD_BLOCK]: (state, { id }) => ({
    ...state,
    [id]: {
      value: ''
    },
  }),
  [REMOVE_BLOCK]: (state, { id }) => {
    delete state[id];
    return {
      ...state,
  }
  
  },
  [GET_DEFAULT_VALUE_SUCCESS]: (state, { payload }) => ({
    ...state,
    [0]: {
      value: payload && payload.data.value
    }
  }),
});