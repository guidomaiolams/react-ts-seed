import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import { getTodo_1 } from '../../../test/entities';
import TodoDetail from './TodoDetail';

describe('TodoList Component', () => {
  let Component;
  let props;

  beforeEach(() => {
    global.console.error = () => {/** */};
    props = {
      todo: { [getTodo_1().id]: getTodo_1() },
      fetchTodoDetail: jest.fn()
    };
    Component = mount(<TodoDetail {...props} />);
  });

  it('should render with default props', () => {
    expect(create(Component).toJSON()).toMatchSnapshot();
  });
});
