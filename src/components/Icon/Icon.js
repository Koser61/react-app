import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name }) => (
  <>
    <i className={`fas fa-${name}`} />
  </>
);

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
