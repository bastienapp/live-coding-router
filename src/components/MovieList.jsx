import React from 'react';
import MovieAlien from './MovieAlien';
import MovieTheThing from './MovieTheThing';
import MovieDieHard from './MovieDieHard';

function MovieList() {
  return (
    <section className="Movies">
      <MovieAlien />
      <MovieTheThing />
      <MovieDieHard />
    </section>
  );
}

export default MovieList;
