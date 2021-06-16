import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render(){
    const { title } = this.props;
    return (
      <div className={styles.component}>
        <p>{title}</p>
      </div>
    );
  }
}

export default Card;