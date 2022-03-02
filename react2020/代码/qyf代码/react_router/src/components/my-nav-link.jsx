import React, {Component} from 'react'
import {NavLink} from "react-router-dom";

export default class MyNavLink extends Component{

  render() {
    return (
      /*
      * {...this.props}可以将外部所有属性都传给NavLink
      * */
      <NavLink {...this.props} activeClassName="activeClass"/>
    )
  }

}