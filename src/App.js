import React from 'react'
import Card from './components/Card'
const App = ()=>{
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

  //const listaAlumnos = [<p>Ivan</p>,<p>Esteban</p>,<p>Daniel</p>]
  return(
    <div>
      <p id='saludo'>Hola</p>
      <Card titulo={`La tarjeta numero ${numero}`} numero={numero}/>
      <Card titulo={`La tarjeta numero ${numero}`} numero={numero}/>
      <Card titulo={`La tarjeta numero ${numero}`} numero={numero}/>
      <Card titulo={`La tarjeta numero ${numero}`} numero={numero}/>
      
      {/* {listaAlumnos} */}
      {listaJSX}
      {listaAlumnosSimple.map((alumno,index)=><p key={index}>{alumno}</p>)}
    </div>
  )
}

export default App