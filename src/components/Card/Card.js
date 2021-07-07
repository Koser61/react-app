import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';
import {Draggable} from 'react-beautiful-dnd';

const Card = ({title, id, index}) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <article
        className={styles.component}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {title}
      </article>
    )}
  </Draggable>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  index: PropTypes.number,
};

export default Card;