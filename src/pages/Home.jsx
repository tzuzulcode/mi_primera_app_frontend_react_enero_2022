import React, { useEffect, useState } from 'react';
import Movies from '../components/Movies';

export default function Home() {
    const [characters,setCharacters] = useState([])
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
        <Movies movies={characters}/>
  </>;
}
