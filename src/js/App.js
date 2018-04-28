import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoList from './TodoList';
import withTodosNull from './withTodosNull';
import '../css/style.css';

const ListWithTodosNull = withTodosNull(TodoList)

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
        <ListWithTodosNull
          isLoadingTodos={false}
          todos={[]}
        />
      </div>
    );
  }
}



render(<Hello />, document.getElementById('app'));
