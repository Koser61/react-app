import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './Card.scss';

const Card = ({ title, isSearchResult, listTitle, columnTitle }) => {
  const getCardLocation = () => {
    return ReactHtmlParser(`(${listTitle} &gt; ${columnTitle})`);
  };

  return (
    <div className={styles.component}>
      <p>{title}</p>
      {isSearchResult &&
        <>
          <p><em>{getCardLocation()}</em></p>
        </>
      }
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  isSearchResult: PropTypes.bool,
  listTitle: PropTypes.string,
  columnTitle: PropTypes.string,
};

export default Card;