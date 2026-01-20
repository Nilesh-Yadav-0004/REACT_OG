import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import * as types from '../Reducer/Todos/Action';

export const TodoList = () => {
   const dispatch = useDispatch();

   const value = useSelector((xyz) => {
    return xyz.todos.todo;
   });
    console.log('🚀 ~ TodoList.jsx ~ value:', value);
    // console.log('---> ~ value:', value);
    const { token } = useSelector((xyz) => {
      return xyz.auths
    })
    console.log('🚀 ~ TodoList.jsx ~ token:', token);

    const handleEdit = (id) => {
      dispatch({ type: types.EDITTODOS, payload: id });
    };

    const handleDelete = (id) => {
      dispatch({ type: types.DELETETODOS, payload: id });
    };

    const handleConfirm = (id, text) => {
      dispatch({
        type: types.CONFIRMTODODS,
        payload: { id, text },
      });
    };

    const handleCancel = (id) => {
      dispatch({
        type: types.CANCELTODODS,
        payload: id
      });
    };

    return (
      <>
      <h1></h1>
      {value &&
        value.map((el) => {
          return (
            <div
            key={el.id}
            style={{
              width: '50%',
              margin: '10px auto',
              display: 'flex',
              justifyContent: 'space-around',
            }}
            >
              
              {el.isEdit ? (
                <>
                <input
                type="text"
                defaultValue={el.text}
                onChange={(e) => (el.tempText = e.target.value)}
                />
                <button onClick={() => handleConfirm(el.id, el.tempText)}>
                  confirm
                </button>

                <button onClick={() => handleCancel(el.id)}>
                  cancel
                </button>
                </>
              ) : (

              
                 <>
               <input type="checkbox" />
               <h3>{el.id}</h3>
               <p>{el.text}</p>
               <button onClick={() => handleEdit(el.id)}>edit</button>
               <button onClick={() => handleDelete(el.id)}>delete</button>
              </>
              )}
            </div>
          );
        })}

      </>
    );
};