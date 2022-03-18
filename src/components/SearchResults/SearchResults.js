import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Card from '../Card/CardContainer';

const SearchResults = ({ cards }) => (
  <section className={styles.component}>
    {cards.map((cardData) => (
      <Card key={cardData.id} isSearchResult {...cardData} />
    ))}
  </section>
);

SearchResults.propTypes = {
  cards: PropTypes.array,
};

export default SearchResults;