import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import MenuComponent from '../menu.Component';

class App extends Component {
  render() {
    let greetings = 'Welcome to React';
    const menuItems = ['About','Service','Portfolio','Home'];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{greetings}</h2>
        </div>
        <MenuComponent menuItems={menuItems}/>
      </div>
    );
  }
}

export default App;
