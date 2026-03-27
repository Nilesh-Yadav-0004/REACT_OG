import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removNotify } from '../Redux/ActionType';

export const Notification = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.Notification);

    return (
        <>
            <div style={{}}>
                {value &&
                  value.map((el) => {
                    console.log('~ el:', el);
                    return (
                        <div
                    )
                  })

                }
            </div>
        </>
    )
}