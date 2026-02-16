import PropTypes from 'prop-types'
import { useState } from 'react'
import { PinItem } from './PinItem';

export const Inputbox = ({ length, style }) => {
    const [values, setValues] = useState(new Array(length).fill(0))

    return (
        <>
            {values.map((items, index) => <PinItem style={style} key=[index] />)}
        </>
    )

}
Inputbox.PropTypes ={
    label: PropTypes.string.isRequired
}

Inputbox.defaultProps = {
    label: "hello"
}