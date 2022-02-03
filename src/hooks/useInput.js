import {useState} from 'react';

export default function useInput(type,initialValue) {
    const [value,setValue] = useState(initialValue)

    const onChange=({target:{value}})=>{
        setValue(value)
    }

    const reset = () =>{
        setValue('')
    }

    return {
        value,onChange,reset,type
    }
}
