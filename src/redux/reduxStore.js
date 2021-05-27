import {combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

import chatReducer from "./chatReducer";

let reducers = combineReducers({
    chatPage: chatReducer,
    form: formReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
