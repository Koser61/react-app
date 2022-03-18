import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';

const Home = ({ title, subtitle, lists, addList }) => (
  <Container>
    <div className={styles.component}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <div className={styles.columns}>
        {lists.map((listData) => (
          <ListLink key={listData.id} {...listData} />
        ))}
      </div>
      <div className={styles.creator}>
        <Creator text={settings.listCreatorText} action={addList} />
      </div>
    </div>
  </Container>
);

Home.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  lists: PropTypes.array,
  addList: PropTypes.func,
};

export default Home;
