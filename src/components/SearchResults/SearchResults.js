import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Card from '../Card/Card';

const SearchResults = ({ cards }) => (
  <section className={styles.component}>
    {cards.map((cardData) => (
      <Card key={cardData.id} {...cardData} />
    ))}
  </section>
);

SearchResults.propTypes = {
  cards: PropTypes.array,
};

export default SearchResults;