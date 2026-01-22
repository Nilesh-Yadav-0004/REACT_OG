// ! Todo List 

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { TodoInput } from './TodoInput';
import axios from 'axios';
import * as actFunc from '../Redux/Action';

export const Todo = () => {
  axios
    .get('http://localhost:8080/todo')
    .then((res) => dispatchEvent(actFunc.GET_TODOS_SUCCESS(res.data)))
    .catch((err) => console.error(err));
};

React.useEffect(() => {
  getApi()
  
},[])
console.log('---> ~ data:', data);

return (
  <>
    <h1>todo</h1>
    <TodoInput getApi={getApi} />
    {data.map((el))}
  </>
)