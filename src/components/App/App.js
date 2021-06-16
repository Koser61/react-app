import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import Creator from '../Creator/Creator.js';
import { pageContents, listData, settings } from '../../data/dataStore';

class App extends React.Component {
  state = {
    lists: [listData],
  }
  addList(title){
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            image: settings.defaultListImage,
            columns: [],
          },
        ],
      }
    ));
  }
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        {this.state.lists.map(({key, ...listProps}) => (
          <List key={key}{...{listProps}}/>
        ))}
        <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
      </main>
    );
  }
}

export default App;
