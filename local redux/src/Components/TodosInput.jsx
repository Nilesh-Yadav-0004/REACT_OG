import React, { useRef } from 'react';

export const TodosInput = () => {
    const inputData = useRef(null);

    const handleAdd = () => {
        const valueText = inputData.current.value;
        console.log('~ valueText:', valueText);
    };

  return (
    <>
      <h1>Todo </h1>
      <input type="text" ref={inputData} />
      <button onClick={() => handleAdd}>add</button>        
    </>
  );
};


