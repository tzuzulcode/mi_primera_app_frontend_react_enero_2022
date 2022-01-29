import React,{useContext} from 'react';
import { userContext } from '../../context/UserContext';

export default function NombreUsuario() {
    const {user} = useContext(userContext)
  return <div>
      <p>{user.nombre}</p>
  </div>;
}
