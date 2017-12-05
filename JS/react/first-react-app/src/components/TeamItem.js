import React, { Component } from 'react';


class TeamItem extends Component {
  render() {
  	
    return (
      <li className="TeamItem"> 
        <strong>{this.props.team.id}</strong> - {this.props.team.title} - {this.props.team.desc} - {this.props.team.size}
      </li>
    );
  }
}

export default TeamItem;