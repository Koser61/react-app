import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { settings } from '../../data/dataStore';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';

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
  description: PropTypes.node,
  columns: PropTypes.array,
  image: PropTypes.string,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: ReactHtmlParser(settings.defaultListDescription),
};

export default List;
