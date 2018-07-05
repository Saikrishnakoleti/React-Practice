import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props){
    super()
    this.state = {
      
        name : " ",
        contact : " ",
        hobby : " "
      
    }
      this.handleName = this.handleName.bind(this);
      this.handleContact = this.handleContact.bind(this);
      this.handleHobby = this.handleHobby.bind(this);
  }
  handleName(e){
    this.setState({
      name : e.target.value
    })
  }
  handleContact(e){
      this.setState({
      contact : e.target.value
    })
  }
  handleHobby(e){
    this.setState({
      hobby : e.target.value
    })
  }
  render() {
    return(
      <div>
      <p> Add the input: </p>
      <p> {this.state.name}</p>
      <p> {this.state.contact}</p>
      <p> {this.state.hobby}</p>
        <input onChange= {this.handleName} value = {this.state.name} />
        <input onChange= {this.handleContact} value = {this.state.contact} />
        <input onChange= {this.handleHobby} value = {this.state.hobby} />
      </div>
    )
  }
}

export default App;
