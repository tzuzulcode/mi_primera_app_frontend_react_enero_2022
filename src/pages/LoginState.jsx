import React, { useState } from 'react';
import useInput from '../hooks/useInput';

export default function LoginState() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [data,setData] = useState({})

    const {onChange,value,reset,type} = useInput("text","")
    const name = useInput("text","Tzuzul")

    const iniciarSesion=(event)=>{
        event.preventDefault()
        //const {password:{value:password},email:{value:email}} = event.target
        console.log(password,email)
        setPassword("")
        setEmail("")
    }

    const handleChange = ({target:{name,value}})=>{
      data[name] = value
      setData({...data})
    }
    return <>
      <form onSubmit={iniciarSesion}>
          {/* controlled component */}
          <input value={value} onChange={onChange} type={type}></input>
          <input {...name}></input>
          <input value={email} onChange={(event)=>{setEmail(event.target.value)}} type="email" name='email'></input>
          <input value={password} onChange={(event)=>{setPassword(event.target.value)}} type="password" name='password'></input>
          <input value={data.email} onChange={handleChange} type="email" name='email2'></input>
          <input value={data.password} onChange={handleChange} type="password" name='password2'></input>
          <button>Iniciar sesión</button>
      </form>
    </>;
}
