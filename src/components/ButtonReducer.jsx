import React, { useReducer, useState } from 'react';
import counterReducer,{initialState} from '../reducers/counterReducer'
export default function ButtonReducer() {
    const [state,dispatch] = useReducer(counterReducer,initialState)
    const [counter,setCounter] = useState(0)
    return <div>
        <p>{state.counter}</p>
        <button onClick={()=>{dispatch({type:'add'})}}>Add</button>
        <button onClick={()=>{dispatch({type:'sub'})}}>Substract</button>
        <button onClick={()=>{dispatch({type:'addBy',amount:5})}}>Add by 5</button>
        <p>{counter}</p>
        <button onClick={()=>{setCounter(counter+1)}}>Click</button>
        <button onClick={()=>{setCounter(counter-1)}}>Click</button>
    </div>;
}
