import React, { Component } from 'react';
import TeamItem from './TeamItem';

class Teams extends Component {
  render() {
  	let teamItems;
  	if(this.props.teams){
  		teamItems = this.props.teams.map(team => {
  			//console.log(team);
  			return(
  				< TeamItem key={team.id} team={team}/>
  				);
  			
  		});
  	}
  	
    return (
      <div className="Teams"> 
        {teamItems}
      </div>
    );
  }
}

export default Teams;
