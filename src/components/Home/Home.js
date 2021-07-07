import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink';
import {DragDropContext} from 'react-beautiful-dnd';

const moveCardHandler = result => {
  console.log(result);
};

const Home = ({ title, subtitle, lists }) => (
  <main className={styles.component}>
    <h1 className={styles.title}>{title}</h1>
    <h2 className={styles.subtitle}>{subtitle}</h2>
    <DragDropContext onDragEnd={moveCardHandler}>
      {lists.map((listData) => (
        <ListLink key={listData.id} {...listData} />
      ))}
    </DragDropContext>
  </main>
);

Home.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  lists: PropTypes.array,
};

export default Home;
