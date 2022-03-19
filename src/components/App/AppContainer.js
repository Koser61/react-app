import {connect} from 'react-redux';
import { createActionMoveCard } from '../../redux/cardsRedux';
import App from './App';

const mapDispatchToProps = (dispatch) => ({
  moveCard: (payload) => dispatch(createActionMoveCard(payload)),
});

export default connect(null, mapDispatchToProps)(App);