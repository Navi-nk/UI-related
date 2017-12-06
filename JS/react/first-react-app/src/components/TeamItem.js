import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TeamItem extends Component {
	handleDeleteTeam(id){
		this.props.deleteTeam(id);
	}
  render() {
  	
    return (
    		<li className="TeamItem"> 
        		<strong>{this.props.team._id}</strong> - {this.props.team.title} - {this.props.team.desc} - {this.props.team.size} <a href="#" onClick={this.handleDeleteTeam.bind(this,this.props.team._id)}>Delete</a>
      		</li>
    );
  }
}

TeamItem.propTypes={
	team : PropTypes.object,
	deleteTeam : PropTypes.func	
}

export default TeamItem;