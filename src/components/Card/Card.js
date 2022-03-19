import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Draggable } from 'react-beautiful-dnd';

import styles from './Card.scss';

const Card = ({ id, index, title, isSearchResult, listTitle, columnTitle }) => {
  const getCardLocation = () => {
    return ReactHtmlParser(`(${listTitle} &gt; ${columnTitle})`);
  };

  if(isSearchResult) {
    return (
      <article className={styles.component}>
        <p>{title}</p>
        {isSearchResult &&
          <>
            <p><em>{getCardLocation()}</em></p>
          </>
        }
      </article>
    );
  } else {
    return (
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <article
            className={styles.component}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <p>{title}</p>
          </article>
        )}
      </Draggable>
    );
  }
};

Card.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  isSearchResult: PropTypes.bool,
  listTitle: PropTypes.string,
  columnTitle: PropTypes.string,
};

export default Card;