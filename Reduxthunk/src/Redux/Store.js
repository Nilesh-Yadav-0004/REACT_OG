import { legacy_createStore } from 'redux';

import { todoReducer } from './Reducers';

export const myStore = legacy_createStore(todoReducer);