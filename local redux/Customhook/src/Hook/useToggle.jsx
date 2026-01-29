import { useState } from 'react';

export const useToggle = (incomVal) => {
    const [value, setValue] = useState(incomVal);

    function toggleValue(val) {
        if (typeof val === 'boolean'){
            setValue(!val);
        } else {
            setValue(val);
        }
    }

    return [value, toggleValue];
};