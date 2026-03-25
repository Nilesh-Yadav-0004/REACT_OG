import * as types from './Action';

const initialValue = [];

export const Reducer = (state = initialValue, {type, payload}) => {
 switch (type) {
    case types.ADD_NOTIFICATION:
        return [...state, payload];

    case types.REMOVE_NOTIFICATION:
        return state.filter((el)=> el.id === payload)
 }
}