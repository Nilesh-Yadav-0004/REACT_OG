import * as types from '../Redux/ActionType';

const getTodoTRequest = (payload) => {
    return { type: types.GET_TODOS_SUCCESS, payload };
};

const GET_TODOS_FAILURE = (payload) => {
    return { type: types.GET_TODOS_FAILURE, payload };
};

const GET_TODOS_SUCCESS = (payload) => {
    return { type: types.GET_TODOS_SUCCESS, payload };
};

const ADDTodoTRequest = (payload) => {
    return { type: types.ADD_TODOS_SUCCESS, payload };
};

const ADD_TODOS_FAILURE = (payload) => {
    return { type: types.ADD_TODOS_FAILURE, payload };
};

const ADD_TODOS_SUCCESS = (payload) => {
    return { type: types.ADD_TODOS_SUCCESS, payload };
};

export { getTodoTRequest, GET_TODOS_SUCCESS, GET_TODOS_FAILURE, ADDTodoTRequest, ADD_TODOS_SUCCESS, ADD_TODOS_FAILURE };

