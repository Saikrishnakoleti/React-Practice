import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import Autofixr from "./autofixr";
import Administration from "./administration";
import MyDashBoard from "./mydashboard";
import ManageDashBoard from "./managedashboard";

class MenuRouter extends Component {
    render() {
       return (
         <div>
              <div className="content">
                  <Route exact path={"/autofixr" }component={Autofixr}/>
                  <Route path={"/administration"} component={Administration}/>
                  <Route path={"/mydashboard"} component={MyDashBoard}/>
                  <Route path={"/managedashboard"} component={ManageDashBoard}/>
              </div>
              </div>
      )
   }
}
export default MenuRouter;
