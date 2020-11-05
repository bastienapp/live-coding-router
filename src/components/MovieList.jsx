import React from 'react';
import { fetchAll } from '../FakeApi';
import MovieItem from './MovieItem';

function MovieList() {
  const movies = fetchAll();
  return (
    <section className="Movies">
      {movies.map((movie) => (
        <ul>
          <li key={movie.id}>
            <MovieItem key={movie.id} id={movie.id} />
          </li>
        </ul>
      ))}
    </section>
  );
}

export default MovieList;
