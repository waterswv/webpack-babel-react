import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

import landscapeImage from '../assets/landscape_nature.jpg';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
        <img src={ landscapeImage } alt='Landscapes' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
