import React, { Component } from 'react';
import { Link } from 'react-router';
import '../app/App.css';
import logo from '../../logo.svg';

class AboutComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>THIS IS ABOUT</h1>
        </div>
        <Link to='/'>Base Url</Link>
      </div>
    );
  }
}

export default AboutComponent;
