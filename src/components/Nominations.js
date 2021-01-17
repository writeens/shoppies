import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import MovieCard from './MovieCard';

const Nominations = ({ nominations, handleRemoveNomination }) => (
  <div className="flex flex-col flex-1 p-2">
    <p className="mb-8 font-bold text-xl md:text-3xl">Nominations</p>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-2">
      {nominations
        .map(({
          imdbID, Title, Year, Plot, Poster, isNominated,
        }) => (
          <MovieCard
            key={imdbID}
            id={imdbID}
            title={Title}
            year={Year}
            plot={Plot}
            poster={Poster}
            isInResult={false}
            isNominated={isNominated}
            handleRemoveNomination={handleRemoveNomination}
          />
        ))}
    </div>
  </div>
);

Nominations.defaultProps = {
  handleRemoveNomination: () => {},
};

Nominations.propTypes = {
  nominations: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
  handleRemoveNomination: PropTypes.func,
};

export default Nominations;
