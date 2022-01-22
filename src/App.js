import React, { useState } from 'react'
import Card from './components/Card'

const App = ()=>{

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
    tarjetas.push(<Card key={tarjetas.length} titulo={`La tarjeta numero ${tarjetas.length}`} numero={tarjetas.length}/>)
    setTarjetas([...tarjetas])
  }

  return(
    <div>
      <p id='saludo'>Hola</p>
      <h2>Prueba de css</h2>
      <button onClick={agregarTarjeta}>Agregar tarjeta</button>
      <div className='cuadricula'>
        {tarjetas}
      </div>
      
      {/* {listaAlumnos} */}
      {listaJSX}
      {listaAlumnosSimple.map((alumno,index)=><p key={index}>{alumno}</p>)}
    </div>
  )
}

export default App