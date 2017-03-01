import React, { Component } from 'react';
import { connect } from "react-redux";
import './about.component.css';

function mapStateToProps(state) {
    return {
        textArray: state.counterReducer['textArr'],
    };
}

class AboutComponent extends Component {

  render() {
    var listingTodos = this.props.textArray.map((d, i)=>{
     return <li key={i}>{d.text} <button>Edit</button><button>Delete</button></li>
    })
    return (
      <div className="">
          <h1>THIS IS ABOUT</h1>
        <ul className='lsitDecoration'>{listingTodos}</ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(AboutComponent);
