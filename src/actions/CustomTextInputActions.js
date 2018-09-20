import {
  TEXT_CHANGED,
  ADD_BLOCK,
  REMOVE_BLOCK,
  GET_DEFAULT_VALUE,
  GET_DEFAULT_VALUE_SUCCESS,
  GET_DEFAULT_VALUE_FAILURE
} from '../store/actionTypes';

export function fetchDefaultValue() {
  return dispatch => {
    dispatch(defaultValue());
    return fetch("https://api.myjson.com/bins/xpf4k")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchDefaultValueSuccess(json));
        return json.products;
      })
      .catch(error => dispatch(fetchDefaultValueError(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const defaultValue = () => ({
  type: GET_DEFAULT_VALUE,
});


export const fetchDefaultValueSuccess = data => ({
  type: GET_DEFAULT_VALUE_SUCCESS,
  payload: { data }
});

export const fetchDefaultValueError = error => ({
  type: GET_DEFAULT_VALUE_FAILURE,
  payload: { error }
});

export const textChanged = (text, id) => {
  return {
    type: TEXT_CHANGED,
    payload: text,
    id: id,
  };
};
export const addObj = (id) => ({
  type: ADD_BLOCK,
  id,
});

export const removeObj = (id) => ({
  type: REMOVE_BLOCK,
  id,
});
