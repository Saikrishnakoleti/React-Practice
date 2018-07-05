import React, { Component } from 'react';
import logo from './logo.svg';

class profile extends React.Component {
  render() {
    let hobbies = this.props.hobbies.map(hobby =>{
      return <li> hobby </li>
    })
    return(
      <div>
        <h3> {this.props.name} </h3>
        <p>{this.props.name},{this.props.age} </p>
        <h3> Hobbies </h3>
        <ul>hobbies</ul>
      </div>
    )
  }
}
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      profile : [
        {name : "john",
        age :30,
        hobbies : "Playing cricket"
        },
        {name : "Ram",
        age : 20,
        hobbies : "Watching movies"
        }


      ]
    }
  }
  render() {
    let profile = this.state.profile.map(profile => {
      return(
        <profile
        name = {profile.name}
        age = {profile.age}
        hobbies = {profile.hobbies} />
      )
    })
    return(
      <div>
        {profile}
      </div>
    )
  }
}

export default App;
