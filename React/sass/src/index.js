import React from "react";
import ReactDOM from "react-dom";
import Header from "./scripts/header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
import './styles/main.css';


ReactDOM.render(
  <Header/>,
  document.getElementById("root")
);
