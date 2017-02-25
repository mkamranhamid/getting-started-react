import React, { Component } from 'react';
import { Link } from 'react-router'
import '../app/App.css';
import logo from '../../logo.svg';

class LinkComponent extends Component {
  constructor(props){
    super(props)
  }
  static propTypes = {
    menuItems: React.PropTypes.arrayOf(
      React.PropTypes.string
    )
  }
  state = {
    label: this.props.label
  }
  
  render() {
      const tLabel = this.props.label;
      var labelUrl = '/'+ this.props.label.toLowerCase().trim().replace(' ','-')
    return (
      <li><Link to={labelUrl}>{tLabel}</Link></li>
    );
  }
}

export default LinkComponent;
