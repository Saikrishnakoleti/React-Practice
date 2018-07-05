import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import Autofixr from "./autofixr";
import Rules from "./rules";
import Administration from "./administration";
import MyProfile from "./myprofile";
import MyAccount from "./myaccount";
import LogOut from "./logout";

class Main extends Component {
  render() {
    return (
        <HashRouter>
          <div>
              <ul className="header">
                <li><NavLink to="/autofixr">Autofixr</NavLink></li>
                <li><NavLink to="/rules">Rules</NavLink></li>
                <li><NavLink to="/administration">Administration</NavLink></li>
                <li><NavLink to="/myprofile">My Profile</NavLink></li>
                <li>
                    <div className="dropdown">
                        <button className="dropbtn">Dashboard</button>
                        <div className="dropdown-content">
                          <NavLink to="/">My Dashboard</NavLink>
                          <NavLink to="/">Manage Dashboard</NavLink>
                        </div>
                    </div>
                </li>
                <li>
                  <div className="dropdown float">
                      <button className="dropbtn">My Profile</button>
                      <div className="dropdown-content">
                        <NavLink to="/myaccount">My Account</NavLink>
                        <NavLink to="/logout">Log Out</NavLink>
                      </div>
                  </div>
                </li>
              </ul>
              <div className="content">
                  <Route exact path={"/autofixr" }component={Autofixr}/>
                  <Route path={"/rules"} component={Rules}/>
                  <Route path={"/administration"} component={Administration}/>
                  <Route path={"/myprofile"} component={MyProfile}/>
                  <Route path={"/myaccount"} component={MyAccount}/>
                  <Route path={"/logout"} component={LogOut}/>
              </div>
          </div>
        </HashRouter>
    );
  }
}
export default Main;
