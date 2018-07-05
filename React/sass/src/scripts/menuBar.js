import React, { Component } from "react"; 
import {Route,Link,HashRouter} from "react-router-dom"; 
import Autofixr from "./autofixr"; 
import ManageDashBoard from "./managedashboard"; 
import MyDashBoard from "./mydashboard"; 
import MyProfile from "./myprofile"; 
import LogOut from "./logout"; 
import Rules from "./rules";
class Header extends Component {
    
    render() {
        return (
            <HashRouter>
                <div>
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand" to="/autofixr" replace>Autofixr</Link>
                     <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="navbar-brand dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                                        Dashboard
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                      <Link  to="/mydashboard"  className=" dropdown-item" replace>My Dashboard</Link>
                                     <Link  to="/managedashboard"  className=" dropdown-item" replace>Manage Dashboard</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="navbar-brand dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                                        Administration
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link  to="" className=" dropdown-item" replace>Settings</Link>
                                    <Link  to="/rules" className="dropdown-item" replace>Rules</Link>
                                </div>
                            </li>
                        </ul>
                      </div>
                      <ul className="navbar-nav mr-5">
                        <li className="nav-item dropdown mr-5">
                            <a className="navbar-brand dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                                    Profile
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link  to="/myprofile"  className=" dropdown-item" replace>My Profile</Link>
                                 <Link  to="/logout"  className=" dropdown-item" replace>Log Out</Link>
                            </div>
                        </li>
                      </ul>
                    </nav>
                    <div className="content">
                          <Route exact path={"/autofixr"} component={Autofixr}/>
                          <Route path={"/mydashboard"} component={MyDashBoard}/>
                          <Route path={"/managedashboard"} component={ManageDashBoard}/>
                          <Route path={"/rules"} component={Rules}/>
                          <Route path={"/myprofile"} component={MyProfile}/>
                          <Route path={"/logout"} component={LogOut}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
} 
export default Header;