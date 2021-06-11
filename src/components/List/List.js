import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
  }
  static defaultProps = {
    description: ReactHtmlParser(settings.defaultListDescription),
  }
  state = {
    columns: this.props.columns || [],
  }
  render() {
    return (
      <section className={styles.component}>
          <Hero titleText={this.props.title} imgSrc={this.props.image}/>
          <div className={styles.description}>
            {this.props.description}
          </div>
          <div className={styles.columns}>
            {this.state.columns.map(({key, ...columnProps}) => (
              <Column key={key} {...columnProps} />
            ))}
          </div>
      </section>
    )
  }
}

export default List;
