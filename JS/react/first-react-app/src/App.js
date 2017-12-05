import React, { Component } from 'react';
import Teams from './components/Teams';
import AddTeam from './components/AddTeam';
import './App.css';

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

  handleAddTeam(team){
    console.log(team);
    let teams = this.state.teams;
    teams.push(team);
    this.setState({teams:teams});
  }

  render() {
    return (
  //everything has to be under one div. There can be nested divs but not multiple divs
      <div className="App"> 
        <AddTeam teams={this.state.teams} addTeam={this.handleAddTeam.bind(this)}/>
        <Teams teams={this.state.teams}/> {/*the state are passes around via properties*/}
      </div>
    );
  }
}

export default App;