import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      profile : [
        {name : "john"},
        {name : "ram"}
      ]
    }
  }
  render() {
    return(
      <div>
        <p> {this.state.profile[0].name}</p>
        <p> {this.state.profile[1].name}</p>
      </div>
    )
  }
}

export default App;
