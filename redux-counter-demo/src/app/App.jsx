import React, { Component } from 'react';

import store from '../store/index';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  toDispatchAction(d){
    console.log(d)
    store.dispatch({type:d})
  }
  render() {
    let greetings = 'Welcome to React';
    return (
      <div className="App">
        <div className="App-header">
          <button onClick={this.toDispatchAction.bind(this,'INCREMENT')}>INCREMENT</button>
          <div style={{width:'40%',display:'inline-block'}}></div>
          <button onClick={this.toDispatchAction.bind(this,'DECREMENT')}>DECREMENT</button>

        </div>
      </div>
    );
  }
}

export default App;
