import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from 'redux-thunk';
import { Reducer as notificationReducer } from './reducer';

const root = combineReducers({notification: notificationReducer,});

export const myStore = legacy_createStore(root, applyMiddleware(thunk));