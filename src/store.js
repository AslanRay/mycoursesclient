import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleWares = [thunk];
const store = createStore(reducers, applyMiddleware(...middleWares));

export default store;
