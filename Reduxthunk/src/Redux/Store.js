import { legacy_createStore } from 'redux';

import { todoReducer } from './Reducer';

export const myStore = legacy_createStore(todoReducer);


const composeEnhancers =
    (typeof window === 'undefined' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) 
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
   todoReducer,
   enhancer,
);
