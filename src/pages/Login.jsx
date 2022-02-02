import React, { useRef } from 'react';

export default function Login() {

    const email = useRef()
    const password = useRef()
    const iniciarSesion=(event)=>{
        event.preventDefault()
        //const {password:{value:password},email:{value:email}} = event.target
        console.log(password.current.value,email.current.value)
    }
  return <>
    <form onSubmit={iniciarSesion}>
        <input ref={email} type="email" name='email'></input>
        <input ref={password} type="password" name='password'></input>
        <button>Iniciar sesión</button>
    </form>
  </>;
}
