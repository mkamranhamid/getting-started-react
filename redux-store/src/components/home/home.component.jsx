import React, { Component } from 'react';
import { connect } from "react-redux";

import {CounterAction} from '../../store/action/counterAction'
import './home.component.css';
import '../../app/App.css';

function mapStateToProps(state) {
    return {
        counter: state.counterReducer['count'],
    };
}

function mapDispatchToProps(dispatch) {
    return {
        incrmnt: () => dispatch(CounterAction.CallIncrement()),
        decrmnt: () => dispatch(CounterAction.CallDecrement()),
        addText: (text) => dispatch(CounterAction.CallAddText(text))
    };
}

class HomeComponent extends Component {
  submitFormHandler(e){
    e.preventDefault();
    var text = e.target.firstChild.value;
    console.log('text',text)
    this.props.addText(text)
    text = null
    e.target.firstChild.value = null
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>THIS IS HOME</h1>
          <h1>COUNT: <strong style={{'color':'#deb316'}}>{this.props.counter}</strong></h1>
        </div>
        <button className="button" onClick={this.props.incrmnt}><span>Increment </span></button>
        <button className="button2" onClick={this.props.decrmnt}><span>Decrement </span></button>
        <br/><br/>
        <form onSubmit={this.submitFormHandler.bind(this)}>
          <input type="text" />
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
