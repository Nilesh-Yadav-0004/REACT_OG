import { legacy_createStore } from 'redux';

import { myOwnReducer } from '../Reducer/Counts/Reducer';

export const myOwnStore = legacy_createStore(myOwnReducer);