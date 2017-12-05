import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTeam extends Component {

	constructor(){
		super();
		this.state = {
      newTeam:{} //state element 
  }
}

  //default properties
  static defaultProps = {
  	size : [1,2,3,4,5,6],
  }

  clearInput(){
    this.refs.title.value='';
    this.refs.desc.value='';
    this.refs.size.value=1;
  }

  //this function is called when form is submitted
  handleSubmit(e){
  	let tid=0;
  	e.preventDefault(); //prevents form submission

  	if(this.props.teams){
  		this.props.teams.forEach(t => {

  			if(tid < t.id)
  				tid = t.id;
  		});
  	}

  	if(this.refs.title.value === ''){
  		alert('title is requierd')
  	}
  	else if(this.refs.desc.value === ''){
  		alert('description is requierd')
  	}
  	else{
  		console.log(tid);
  		console.log(this.refs.title.value);
  		console.log(this.refs.desc.value);
  		console.log(this.refs.size.value);

  		this.setState({
  			newTeam:{
  				id: parseInt(tid,10) + 1,
  				title:this.refs.title.value,
  				desc:this.refs.desc.value,
  				size: this.refs.size.value
  			}
  		}, function(){
            
            this.props.addTeam(this.state.newTeam)
            this.clearInput();
        });
  	}
  }

  //dom renders here
  render() {

  	let sizeVal = this.props.size.map(s => {
  		return <option key={s} value={s}> {s} </option>
  	});

  	return (
    <div> 
        <h3>Add Team</h3>
  	     <form onSubmit={this.handleSubmit.bind(this)}>
  	     <div>
  	         <label>Title :</label><br/>
  	         <input type="text" ref="title"/>
  	     </div>
  	     <div>
  	         <label>Description :</label><br/>
  	         <input type="text" ref="desc"/>
  	     </div>
  	     <div>
  	         <label>Team Size :</label><br/>
  	         <select ref="size">
  	             {sizeVal}
  	         </select>
  	     </div>
         <br/>
  	     <input type="submit" value="submit"/>
  	     </form>
  	</div>
  	);
  }
}


AddTeam.propTypes = {
    size : PropTypes.array,
    teams : PropTypes.array,
    addTeam : PropTypes.func
}

export default AddTeam;
