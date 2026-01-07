import React from 'react'
import { TodosInput } from '../Components/TodosInput'
import { TodoList } from '../Components/TodoList'
import TodoLogin from '../Components/TodoLogin';

export const Todo = () => {
  return (
    <>
      <TodoLogin/>
      <TodosInput/>
      <TodoList/>
    </>
  );
};


