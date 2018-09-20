import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const middleWare = [];

middleWare.push(thunk);

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});

middleWare.push(loggerMiddleware);

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
