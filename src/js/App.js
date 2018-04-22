import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchableList from './SearchableList'

import '../css/style.css';


export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
        <SearchableList />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
