import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, isLoadingTodos }) {
  if (isLoadingTodos) {
    return (
      <div>
        <p>Loading todos ...</p>
      </div>
    );
  }

  // Removed conditional rendering with null check

  if (!todos.length) {
    return (
      <div>
        <p>You have no Todos.</p>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
      </ul>
    </div>
  );
}


export default TodoList;
