import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import * as types from "../Reducer/Todos/Action";

export const TodoInput = () => {
  const dispatch = useDispatch();
  const inputData = useRef(null);

  const handleAdd = () => {
    const valueText = inputData.current.value;

    dispatch({
      type: types.ADDTODOS,
      payload: valueText,
    });

    inputData.current.value = "";
  };

  return (
    <>
      <h1>Todo</h1>
      <input type="text" ref={inputData} />
      <button onClick={handleAdd}>add</button>
    </>
  );
};