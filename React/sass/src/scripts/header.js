import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import MenuBar from "./menuBar";


class Header extends Component {
  render() {
    return (  
        <MenuBar/>
    )
  }
}
export default Header;
