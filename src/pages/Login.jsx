import React from 'react';

export default function Login() {
    const iniciarSesion=(event)=>{
        event.preventDefault()
        const {password:{value:password},email:{value:email}} = event.target
        console.log(password,email)
    }
  return <>
    <form onSubmit={iniciarSesion}>
        <input type="email" name='email'></input>
        <input type="password" name='password'></input>
        <button>Iniciar sesión</button>
    </form>
  </>;
}
