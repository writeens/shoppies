/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Loader = ({ small, medium }) => {
  const [newDimensions, setNewDimensions] = useState('');

  const updateWidth = () => {
    if (small) {
      return setNewDimensions('20');
    }
    return setNewDimensions('64');
  };

  useEffect(() => {
    updateWidth();
  }, []);

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="loadingio-spinner-rolling-5kcwe81bj9a">
        <div className="ldio-rjnrubu985">
          <div style={{ width: `${newDimensions}px`, height: `${newDimensions}px` }} />
        </div>
      </div>
    </div>
  );
};

Loader.defaultProps = {
  small: false,
  medium: false,
};

Loader.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
};

export default Loader;
