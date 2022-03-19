import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.scss';

const Button = ({ variant, ...otherProps }) => {
  return (
    <button
      className={
        styles.component + variant.split(' ').map(name => 
          ' ' + (styles[name] || name)).join('')
      }
      {...otherProps}
    />
  );
};

Button.propTypes = {
  variant: PropTypes.string,
};

export default Button;
