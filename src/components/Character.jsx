import React from 'react';

export default function Character({character,children}) {
  return <div >
        <h3>{character.fullName}</h3>
        <p>{character.title}</p>
        {children}
        <img src={character.imageUrl} alt="" />
    </div>;
}
