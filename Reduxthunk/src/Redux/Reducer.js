import * as type from './ActionType';

const initialState = {
    todos: [],
    isLoading: false,
    isError: null,
};

export const todoReducer = (oldState = initialState, action) =>{
    const { types, payload } = action;

    switch (types) {
        case type.GET_TODOS_REQUEST:
            return{
                ...oldState,
                isLoading: true,
            };

            case types.GET_TODOS_SUCCESS:
                return{
                    ...oldState,
                    isLoading: false,
                    isError: payload,
                };

                case types.GET_TODOS_FAILURE:
                return{
                    ...oldState,
                    isLoading: false,
                    isError: payload,
                };

                default:
                    return oldState;
    }
}