import React,{useEffect, useState} from 'react';
import Character from '../components/Character';

export default function GotAPI() {
    //fetch("https://thronesapi.com/api/v2/Characters")
    const [active,setActive] = useState(false)

    const [characters,setCharacters] = useState([])

    useEffect(()=>{
        console.log("Efecto secundario")
    },[active]) // [] => Solamente se realiza una vez

    // useEffect(()=>{
    //     fetch("https://thronesapi.com/api/v2/Characters")
    //     .then(res=>res.json())
    //     .then(data=>setCharacters(data))
    // },[]) // No omitir, causa ciclos infinitos

    useEffect(()=>{
        async function fetchData(){
            const res = await fetch("https://thronesapi.com/api/v2/Characters")
            const data = await res.json()

            setCharacters(data)
        }

        fetchData()
    },[]) // No omitir, causa ciclos infinitos

    return <div>
        {console.log(characters)}
        <button onClick={()=>{setActive(!active)}}>{active?"Activado":"Desactivado"}</button>
        {characters.map(character=><Character key={character.id} character={character}/>)}
    </div>;
}
