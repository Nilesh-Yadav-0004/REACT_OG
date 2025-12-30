import React from 'react'

import { myStore } from '../Store/store';

export const Counter = () => {
    console.log('~ myStore:', myStore);
    console.log('~ currentState:', myStore.getState());

    const storeValue = myStore.getState();

    return (
        <>
        <h1>Counter {getState().count}</h1>
        <button onClick={() => dispatchEvent({ type: types.INCREMENT })}>increment</button>
        <button onClick={() => dispatchEvent({ type: types.DECREMENT })}>decrement</button>
        </>
    );
};
