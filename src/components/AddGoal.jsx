import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

 class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
   this.addGoal=this.addGoal.bind(this);
   this.onchangef=this.onchangef.bind(this);

  }

  addGoal() {

const {email}=this.props.user;
console.log(email);
const title=this.state.title;
console.log(title);

      goalRef.push({email:email, title:title});
  }


  onchangef(event){

      this.setState({title: event.target.value});

  }

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add a goal"
            className="form-control"
            style={{marginRight: '5px'}}
            onChange={event => this.onchangef(event)}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addGoal()}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}


function mapstatetoprops(state) {

  const { user }=state;
  return{
    user
  }

}

export  default connect(mapstatetoprops,null)(AddGoal);


