import React from 'react';
import styles from './ListLink.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

const ListLink = ({id, title, image, description}) => (
  <Link to={`/list/${id}`} className={styles.link}>
    <section className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2 className={styles.title}>{ReactHtmlParser(title)}</h2>
          <p className={styles.description}>
            {ReactHtmlParser(description)}
          </p>
        </div>
        <div className={styles.image}>
          <img src={image} />
        </div>
      </div>
    </section>
  </Link>
);

ListLink.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  image: PropTypes.string.isRequired,
};

ListLink.defaultProps = {
  description: settings.defaultListDescription,
  image: settings.defaultListImage,
};

export default ListLink;
