import React, { Component } from 'react';
import {Link} from 'react-router';
import './menu.Component.css';

class MenuComponent extends Component {
  constructor(props){
    super(props)
  }
  static propTypes = {
    menuItems: React.PropTypes.arrayOf(
      React.PropTypes.string
    )
  }
  state = {
    data: this.props.menuItems
  }
  
  render() {
      const tMenu = this.props.menuItems.map((d,i)=>{
        return <li key={i}><Link to={d.toLowerCase()}>{d}</Link></li>
      },this)
    return (
      <div className="App">
        <ul>{tMenu}</ul>
      </div>
    );
  }
}

export default MenuComponent;
