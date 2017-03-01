import React, { Component } from 'react';
import { Link } from 'react-router';

import TodoComponent from '../todo/todo.component'
import logo from '../../logo.svg';
import '../../app/App.css';

class HomeComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
          <h1>THIS IS HOME</h1>
          <TodoComponent />
      </div>
    );
  }
}

export default HomeComponent;
