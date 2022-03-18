import { connect } from 'react-redux';
import { getListTitleById } from '../../redux/listsRedux';
import { getColumnTitleById } from '../../redux/columnsRedux';
import Card from './Card';

const mapStateToProps = (state, { isSearchResult, listId, columnId }) => {
  if(isSearchResult) {
    return {
      listTitle: getListTitleById(state, listId),
      columnTitle: getColumnTitleById(state, columnId),
    };
  }
};

export default connect(mapStateToProps)(Card);