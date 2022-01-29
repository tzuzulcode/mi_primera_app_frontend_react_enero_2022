import React,{useContext} from 'react';
import NombreUsuario from './NombreUsuario';
import { userContext } from '../../context/UserContext';
export default function Detalles() {
    const {user} = useContext(userContext)
  return <div>
      <p>{user.foto}</p>
      <NombreUsuario/>
  </div>;
}
