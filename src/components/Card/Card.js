import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = ({ title }) => (
  <div className={styles.component}>
    <p>{title}</p>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;