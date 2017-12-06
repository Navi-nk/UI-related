import React, { Component } from 'react';
import Teams from './components/Teams';
import AddTeam from './components/AddTeam';
import './App.css';
import * as Api from './utils/api'

class App extends Component {
  //data are held in state. this data can be from db or another app
  //this is where we define initial state of the app
  constructor(){
    super(); //always needed
    this.state = {
      teams:[]
    }
  }

  //this is a lifecycle method and is called each time the component loads
  componentWillMount(){
    this.setState({
      teams:[
      {
        id:'1',
        title:'Team 01',
        desc:'Best team in iss',
        size: 5
      },
      {
        id:'2',
        title:'Team 10',
        desc:'worst team in iss',
        size: 6
      }
      ]
    })
  }
  //this is another lifecycle method and is called AFTER the initial render when the DOM has been updated 
  componentDidMount(){
  
    Api.fetchTeams().then((response) => {
      console.log(response);
      this.setState({
        teams: response
      })
    });
    
  }

  //this is the handle which is called when AddTeam component calls addTeam function
  handleAddTeam(team){
    let teams = this.state.teams;

    Api.storeTeam(team).then((response) => {
      console.log('inside push');
      console.log(response);
      
      //update state
      teams.push(team);
      this.setState({teams:teams});
    
    });

  }

//this is the handle which is called when Teams component calls deleteTeam function
  handleDeleteTeam(id){
    let newTeams=[];
    

    ;

    Api.deleteTeam(id).then((response) => {
      console.log('inside delete');
      console.log(response);

      //update state
      this.state.teams.forEach( t => {
        if(t._id !== id)
        newTeams.push(t)
      })
      this.setState({teams:newTeams})
    
    });
  }

  //this is where the magic happens
  render() {
    return (
  //everything has to be under one div. There can be nested divs but not multiple divs
      <div className="App"> 
        <AddTeam teams={this.state.teams} addTeam={this.handleAddTeam.bind(this)}/>
        <Teams teams={this.state.teams} deleteTeam={this.handleDeleteTeam.bind(this)}/> {/*the state are passed around via properties*/}
      </div>
    );
  }
}

export default App;
