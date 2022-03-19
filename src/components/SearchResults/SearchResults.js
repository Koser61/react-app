import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container/Container';
import Card from '../Card/CardContainer';

import styles from './SearchResults.scss';

const SearchResults = ({ cards }) => (
  <Container>
    <section className={styles.component}>
      {cards.map((cardData) => (
        <Card key={cardData.id} isSearchResult {...cardData} />
      ))}
    </section>
  </Container>
);

SearchResults.propTypes = {
  cards: PropTypes.array,
};

export default SearchResults;