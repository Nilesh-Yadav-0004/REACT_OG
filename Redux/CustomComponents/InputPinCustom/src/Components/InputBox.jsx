import PropTypes from 'prop-types'
import { useState , useRef } from 'react'
import { PinItem } from './PinItem';

export const Inputbox = ({ length, style }) => {
    const [values, setValues] = useState(new Array(length).fill(0))
    const elements = useRef(new Array(length).fill(0));

    const handleChange = (v, i) => {
        const vals = [...values];

        vals[i] = v;

        setValues(vals);

        if (i < vals.length - 1) {
            elements.current[i + 1]?.focus
        }
    }
    return (
        <>
            {values.map((items, index) => <PinItem style={style} key={index} />)}
        </>
    )

}
Inputbox.PropTypes ={
    label: PropTypes.string.isRequired
}

Inputbox.defaultProps = {
    label: "hello"
}