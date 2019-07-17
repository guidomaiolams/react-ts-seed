import { connect } from 'react-redux';

import { IRootState } from '../../state-mgmt/rootState';
import TodoDetail from './TodoDetail';

export const mapStateToProps = (state: IRootState) => ({
  todo: { id: '1', name: 'Guido Maiola', description: 'a description' }
});

export const mapDispatchToProps = dispatch => ({
  fetchTodoDetail: () => console.log()
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetail);
