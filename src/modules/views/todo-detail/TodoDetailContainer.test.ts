import { mapDispatchToProps } from './TodoDetailContainer';
import { todoState } from '../../state-mgmt/todo';

describe('TodoDetailContainer', () => {
  it('should mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    expect(props).toEqual({
      fetchTodoList: expect.any(Function)
    });
  });

  it('should dispatch fetchTodoList action', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.fetchTodoDetail();
    expect(dispatch).toBeCalledWith(todoState.actions.fetchStart());
  });
});
