import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';


class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.string,
    addCard: PropTypes.func,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  render(){
    const { title, icon, cards, addCard } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
          {title}
        </h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        <Creator text={settings.cardCreatorText} action={addCard}/>
      </section>
    );
  }
}

export default Column;