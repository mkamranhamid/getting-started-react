import React, { Component } from 'react';
import LinkComponent from './routes/link.component';
import './menu.Component.css';
//import './Input.Component.css';

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
        return <div key={i}><LinkComponent label={d}/></div>
      },this)
    return (
      <div className="App">
        <ul>{tMenu}</ul>
      </div>
    );
  }
}

export default MenuComponent;
