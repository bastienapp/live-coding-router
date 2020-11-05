import React from 'react';
import PropTypes from 'prop-types';
import { fetchOne } from '../FakeApi';
import './Movie.css';

function MovieItem(props) {
  const { id } = props;
  const { release, title, director, poster } = fetchOne(id);
  return (
    <article className="Movie">
      <h2>{`${title} (${release})`}</h2>
      <h3>{director}</h3>
      <div>{id}</div>
      <img src={poster} alt={title} />
    </article>
  );
}

MovieItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MovieItem;
