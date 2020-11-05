import React from 'react';
import './Movie.css';

function MovieAlien() {
  return (
    <article className="Movie">
      <h2>Alien (1979)</h2>
      <h3>Ridley Scott</h3>
      <div>tt0078748</div>
      <img
        src="https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        alt="Alien"
      />
    </article>
  );
}

export default MovieAlien;
