import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../app/App.css';
import logo from '../../logo.svg';

class AboutComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
          <h1>THIS IS ABOUT</h1>
      </div>
    );
  }
}

export default AboutComponent;
