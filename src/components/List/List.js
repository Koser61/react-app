import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import { settings } from '../../data/dataStore';

import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';

import styles from './List.scss';

const List = ({ title, image, description, columns, addColumn }) => (
  <Container>
    <section className={styles.component}>
      <Hero titleText={title} imgSrc={image} />
      <div className={styles.description}>{ReactHtmlParser(description)}</div>
      <div className={styles.columns}>
        {columns.map((columnData) => (
          <Column key={columnData.id} {...columnData} />
        ))}
      </div>
      <div className={styles.creator}>
        <Creator text={settings.columnCreatorText} action={addColumn} />
      </div>
    </section>
  </Container>
);

List.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  columns: PropTypes.array,
  image: PropTypes.string.isRequired,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: settings.defaultListDescription,
  image: settings.defaultListImage,
};

export default List;
