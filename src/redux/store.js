import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import Reducers from './combineReducers';

const store = createStore(
    Reducers,
    {},
    devToolsEnhancer()
);

export default store;
