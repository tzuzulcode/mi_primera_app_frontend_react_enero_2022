import React,{useState} from 'react';
import '../css/Card.css'

export default function Card(props) {
    const [numero,setNumero] = useState(0) // 5: valor inicial
    const aumentar = ()=>{
        setNumero(numero+1)
    }
  return <div className='card'>
        {/* Esta entre llaves porque soy una expresion de JS */}
      <h2>{props.titulo}</h2>
      <button onClick={()=>{props.eliminar(props.numero)}}>Eliminar</button>
      <p>Mi contenido {props.numero}</p>
      <p id='contenido'>Numero: {numero}</p>
      <p>Numero: {numero}</p>
      <p>Numero: {numero}</p>
      <p>Numero: {numero}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={()=>{setNumero(0)}}>Reset</button>
      {/* Mi comentario */}
  </div>;
}
