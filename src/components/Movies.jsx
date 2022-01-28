import React from 'react';

export default function Movies({movies}) {
  return <section className='movies'>
      {movies.map(movie=><article key={movie.id} className='movie'>
            {/* Bloque contenedor */}
            <h2 className='movie__title'>{movie.fullName}</h2>
            <div className='movie__stars'>🍉 🍉 🍉 🍉 🍉</div>
            <img className='movie__image' src={movie.imageUrl} alt={movie.fullName}></img>
        </article>)}
  </section>;
}
