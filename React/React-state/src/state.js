import React from 'react';
class Profile extends React.Component{

 render(){
	 let hobbies=this.props.hobbies.map(hobbie=>{
		 return <li>{hobbie}</li>
	 })
	 return(
		 <div>
				<h3>{this.props.name}</h3>
					 <p> {this.props.name} is {this.props.age}</p>
							<h3>Hobbies</h3>
								 <ul>
										{hobbies}
								 </ul>
		 </div>
	 );
 }
}

class Comp extends React.Component{
	constructor(props){
		super();
			this.state={
				profiles:[
					{
						name:"Sai",
						age:23,
						hobbies:['cricket','watching movies']
					},
					{
						name:"Krishna",
						age:23,
						hobbies:['singing','watching movies']
					}
				]
			}
		}
		addUser(e){
			var user = {
				name : "Tom",
				age : 30,
				hobbies : ['basketball', 'Driving']
			}
			this.setState({
				profiles : this.state.profiles.concat([user])
			})
		}
	render(){
			let profile1=this.state.profiles[0]
			let profile2=this.state.profiles[1]
		return(
			<div>
				<Profile name={profile1.name}
					age={profile1.age}
					hobbies={profile1.hobbies}
				/>
				<Profile name={profile2.name}
					age={profile2.age}
					hobbies={profile2.hobbies}
				/>
				<button onClick = {this.addUser.bind(this)}>Add User</button>
			</div>
		);
	}
}
export default Comp;
