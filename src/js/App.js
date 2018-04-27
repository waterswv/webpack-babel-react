import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchableList from './SearchableList'

import '../css/style.css';


export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
        <TodoList
        todos={['Make Dinner', 'Finish Laundry', 'Make HOCs']}
        isLoadingTodos={false}
        />
      </div>
    );
  }
}
function TodoItem({ todo }) {
  return <li>{todo}</li>
}
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

render(<Hello />, document.getElementById('app'));
