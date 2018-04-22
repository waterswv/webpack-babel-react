import React, { Component } from 'react';
import { render } from 'react-dom';
import Search from './Search'

import '../css/style.css';


export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
        <Search />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
