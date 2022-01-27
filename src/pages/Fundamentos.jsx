import React,{useState} from 'react';
import Card from '../components/Card'
import { Link } from 'react-router-dom';

export default function Fundamentos() {
    const [tarjetas,setTarjetas] = useState([])

    // Se regresan elemento de JSX
    const numero = 1
  
    // Objeto
    const componente = {
      numero:numero
    }
  
    const listaAlumnosSimple = ["Ivan","Esteban","Daniel"]
  
    const listaJSX = []
    listaAlumnosSimple.forEach((alumno,index)=>{
      listaJSX.push(<p key={index}>{alumno}</p>)
    })
  
    //const tarjetas = []
    // for(let i=1;i<11;i++){
    //   tarjetas.push(<Card key={i} titulo={`La tarjeta numero ${i}`} numero={i}/>)
    // }
  
    //const listaAlumnos = [<p>Ivan</p>,<p>Esteban</p>,<p>Daniel</p>]
  
    const agregarTarjeta = () =>{
      tarjetas.push(Card)
      setTarjetas([...tarjetas]) // Spread operator
    }
  
    const eliminarTarjeta = (id)=>{
      const nuevasTarjetas = tarjetas.filter((Card,index)=>index!==id)
      setTarjetas(nuevasTarjetas)
    }
  
    return(
      <div>
        <p id='saludo'>Hola</p>
        <a href="/got">GOT API</a>
        <Link to="/got">Game Of Thrones API</Link>
        <h2>Prueba de css</h2>
        <button onClick={agregarTarjeta}>Agregar tarjeta</button>
        <div className='cuadricula'>
          {/* Resolver este reto */}
          {tarjetas.map((Card,index)=><Card eliminar={eliminarTarjeta} key={index} numero={index} titulo={`Tarjeta numero: ${index}`}/>)}
        </div>
        
        {/* {listaAlumnos} */}
        {listaJSX}
        {listaAlumnosSimple.map((alumno,index)=><p key={index}>{alumno}</p>)}
      </div>
    )
}
