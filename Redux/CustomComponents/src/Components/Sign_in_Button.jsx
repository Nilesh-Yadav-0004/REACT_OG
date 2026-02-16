import { Button } from './Button';

export const Sign_in_Buttom = ({ value }) => {
    return (
        <>
            <Button 
                value={{
                    name: value,
                    style: {
                        padding: '.25rem 1rem',
                        borderRadius: '.4rem',
                        border: '2px solid green',
                        background: 'transparent',
                    },
                }}
            />
        </>
    );
};

/* Definition for Custom Hook and Custom Components */

// In React, Custom Components are the building blocks of your UI, while Custom Hooks are the logic engines that power them. 
// Think of a component as the "body" and a hook as the "brain."