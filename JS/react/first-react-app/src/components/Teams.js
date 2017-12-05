import React, { Component } from 'react';
import TeamItem from './TeamItem';
import PropTypes from 'prop-types';

class Teams extends Component {
	handleDeleteTeam(id){
		this.props.deleteTeam(id);
	}

	render() {
		let teamItems;
		if(this.props.teams){
			teamItems = this.props.teams.map(team => {
  			//console.log(team);
  			return(
  				<TeamItem key={team.id} team={team} deleteTeam={this.handleDeleteTeam.bind(this)}/>
  				);
  			
  		});
  	}
  	
    return (
      <div className="Teams"> 
    	<h2> Current teams</h2>
        {teamItems}
      </div>
    );
  }
}

Teams.propTypes = {
	teams : PropTypes.array,
	deleteTeam : PropTypes.func
}

export default Teams;
