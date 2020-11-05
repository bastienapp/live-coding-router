import React from 'react';
import { fetchAll } from '../FakeApi';
import MovieItem from './MovieItem';

function MovieList() {
  const movies = fetchAll();
  return (
    <section className="Movies">
      {movies.map((movie) => (
        <MovieItem key={movie.id} id={movie.id} />
      ))}
    </section>
  );
}

export default MovieList;
