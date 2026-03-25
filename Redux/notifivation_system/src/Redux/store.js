import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from 'redux-thunk';
import { Reducer as notificationReducer } from './reducer';

