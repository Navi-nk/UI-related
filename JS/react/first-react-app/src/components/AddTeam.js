import React, { Component } from 'react';

class AddTeam extends Component {

  constructor(){
    super();
    this.state = {
      newTeam:{},
    }
  }
  static defaultProps = {
      size : [1,2,3,4,5,6],
    }

  
    

    handleSubmit(e){
        let tid=0;
        console.log('submitted');
        e.preventDefault();

        if(this.props.teams){
        this.props.teams.forEach(t => {
        console.log("inside");
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

          //console.log({i});
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
            //console.log(this.state);
            this.props.addTeam(this.state.newTeam)
          });
        }
    }

  render() {
    let sizeVal = this.props.size.map(s => {
      return <option key={s} value={s}>{s}</option>

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
        <input type="submit" value="submit"/>
       </form>
      </div>
    );
  }
}

export default AddTeam;
