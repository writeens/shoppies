/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({
  id, title, year, plot, poster, isNominated, isInResult, handleNominate, handleRemoveNomination,
}) => {
  console.log(isNominated, title);
  /** HANDLE CLICK BUTTON */
  const handleClick = () => {
    if (isInResult && !isNominated) {
      handleNominate(id);
    }
    if (!isInResult) {
      handleRemoveNomination(id);
    }
  };
  return (
    <div className="flex flex-col h-80 rounded bg-white shadow-lg text-black text-xs p-3">
      <img
        src={poster === 'N/A' ? MovieCard.defaultProps.poster : poster}
        alt="movie_image"
        className="w-full h-28 rounded mb-4 object-cover"
      />
      <div className="flex flex-col h-full justify-between">
        <p className="mb-1 font-bold">{title}</p>
        <p className="mb-1 font-light">{year}</p>
        <p className="mb-4 font-light text-justify">{plot}</p>
        <button
          type="button"
          onClick={handleClick}
          disabled={isNominated && isInResult}
          className={`w-full font-light py-2 text-center text-white ${isInResult ? 'bg-s-brightgreen' : 'bg-s-red'} rounded hover:bg-green-800`}
        >
          {!isInResult ? 'Remove' : isNominated ? 'Nominated' : 'Nominate'}

        </button>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  poster: 'https://images.unsplash.com/photo-1603658697717-3729034c37d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  title: 'Unnamed Movie',
  year: '-',
  plot: '',
  isNominated: false,
  handleNominate: () => {},
  handleRemoveNomination: () => {},
};

MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  year: PropTypes.string,
  plot: PropTypes.string,
  poster: PropTypes.string,
  isInResult: PropTypes.bool.isRequired,
  isNominated: PropTypes.bool,
  handleNominate: PropTypes.func,
  handleRemoveNomination: PropTypes.func,
};

export default MovieCard;
