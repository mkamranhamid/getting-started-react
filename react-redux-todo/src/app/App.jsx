import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import MenuComponent from '../components/menu/menu.Component';

class App extends Component {
  render() {
    let greetings = 'Welcome to React';
    const menuItems = ['Service','Portfolio','About'];
    return (
      <div className="App">
        <MenuComponent menuItems={menuItems}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
