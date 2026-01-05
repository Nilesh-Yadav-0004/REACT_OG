import * as type from '../Components/Reducer/Action';

// const initialState = { count: 0 }; 

export const CounterReducer = (state = {count: 100 }, action) => {
    switch (action.type) {
        // # Double
        case types.DOUBLE:
            return {
                ...state,
                count: state.count * 2,
            };
        // # increment
        case type.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        // ! decrement
            case type.DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
            /* 
             continue
             break
             return
            */

        default:
            return state;
    }
};
