import React from 'react';

export default function Character({character}) {
  return <div >
        <h3>{character.fullName}</h3>
        <p>{character.title}</p>
        <img src={character.imageUrl} alt="" />
    </div>;
}
