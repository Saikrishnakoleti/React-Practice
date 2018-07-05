import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import MyProfile from "./myprofile";
import LogOut from "./logout";
  class Profile extends Component {
    render() {
      return (
        <HashRouter>
            <div className = "join">
              <ul className="header">
                  <li>
                    <div className="dropdown">
                        <button className="dropbtn">Profile</button>
                        <div className="dropdown-content">
                            <NavLink to="/myprofile">My Profile</NavLink>
                            <NavLink to="/logout">Log Out</NavLink>
                        </div>
                    </div>
                  </li>
                  <div className="content">
                      <Route path={ "/myprofile"} component={MyProfile}/>
                      <Route exact path={ "/logout" }component={LogOut}/>
                  </div>
                </ul>
            </div>
          </HashRouter>
        )
      }
   }
   export default Profile;
