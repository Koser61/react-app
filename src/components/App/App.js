import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { DragDropContext } from 'react-beautiful-dnd';

import MainLayout from '../MainLayout/MainLayout';
import Home from '../Home/HomeContainer';
import List from '../List/ListContainer';
import SearchResultsContainer from '../SearchResults/SearchResultsContainer';

import styles from './App.scss';

const App = ({ moveCard }) => {
  const moveCardHandler = (result) => {
    if (
      result.destination &&
      (result.destination.index != result.source.index ||
        result.destination.droppableId != result.source.droppableId)
    ) {
      const payload = {
        id: result.draggableId,
        dest: {
          index: result.destination.index,
          columnId: result.destination.droppableId,
        },
        src: {
          index: result.source.index,
          columnId: result.source.droppableId,
        },
      };
      
      moveCard(payload);
    }
  };


  return (
    <DragDropContext onDragEnd={moveCardHandler}>
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
    </DragDropContext>
  );
};

App.propTypes = {
  moveCard: PropTypes.func,
};

export default App;