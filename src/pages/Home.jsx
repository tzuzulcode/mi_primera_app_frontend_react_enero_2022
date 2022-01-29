import React, { useContext, useEffect, useState } from 'react';
import Movies from '../components/Movies';
import Post from '../components/Post/Post';
import { userContext } from '../context/UserContext';

export default function Home() {
    const [characters,setCharacters] = useState([])

    // Consultando el usuario del contexto ( Global)
    const {user,setUser} = useContext(userContext)

    useEffect(()=>{
        async function fetchData(){
            const res = await fetch("https://thronesapi.com/api/v2/Characters")
            const data = await res.json()

            setCharacters(data)
        }

        fetchData()
    },[]) // No omitir, causa ciclos infinitos

  return <>
        {console.log(characters)}
        <p>{user.nombre}</p>
        <button onClick={()=>{setUser({nombre:"Tzuzul",foto:"Mi foto"})}}>Iniciar sesión</button>
        <Movies movies={characters}/>

        <Post usuario={user}/>
  </>;
}
