import React, { memo, useEffect } from 'react';

import { TodoModel } from '../../models';

export interface ITodoDetailProps {
  todo: TodoModel.ITodo;
  fetchTodoDetail: () => void;
}

const TodoDetail = ({ todo, fetchTodoDetail }: ITodoDetailProps) => {
  useEffect(() => {
    fetchTodoDetail();
  }, []); // eslint-disable-line

  return (
    <div className="container" key="TodoDetail">
      <h1>
        {todo.id} {todo.name}
      </h1>
      <p>Description: {todo.description}</p>
    </div>
  );
};

export default memo(TodoDetail);
