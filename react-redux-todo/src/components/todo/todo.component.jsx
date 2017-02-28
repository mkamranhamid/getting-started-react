import React, { Component } from 'react';
import '../../app/App.css';
import logo from '../../logo.svg';

class TodoComponent extends Component {
    constructor(props) {
        super(props)
    }
    static arr = [];
    handleChange(e) {
        var todoText = e.target.value;
        console.log('text', todoText)
    }
    handleFormSubmit(e) {
        e.preventDefault();
        var todoText = e.target.firstChild.value;
        TodoComponent.arr.push(todoText)
        console.log('text', todoText)
    }
    render() {
        var todoText = 'KAKA';
        var todoList = TodoComponent.arr.map((d,i)=>{
           return <li key={i}>{d}</li>
        })
        return (
            <div className="App">
                <h1>THIS IS Todo</h1>
                <ul>{todoList}</ul>
                <form onSubmit={this.handleFormSubmit.bind(this)}>
                    <input type="text"/>
                </form>
            </div>
        );
    }
}

export default TodoComponent;
