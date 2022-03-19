import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';

import MainLayout from '../MainLayout/MainLayout';
import Home from '../Home/HomeContainer';
import List from '../List/ListContainer';
import SearchResultsContainer from '../SearchResults/SearchResultsContainer';

import styles from './App.scss';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/list/:id' component={List} />
        <Route path='/search/:searchString' component={SearchResultsContainer} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;