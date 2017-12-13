import React, { Component } from 'react';
import { Link } from 'react-router';

import { FirebaseApp } from '../firebase';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }

   this.oninputchange= this.oninputchange.bind(this);

  }

  // signUp() {
  //
  //   const { email, password } = this.state;
  //   firebaseApp.auth().createUserWithEmailAndPassword(email, password)
  //     .catch(error => {
  //       this.setState({error})
  //     })
  // }



  singnup(){

    const { email, password }=this.state;

    FirebaseApp.auth().createUserWithEmailAndPassword(email,password).catch(error => {
        this.setState({error})
        console.log(error);
    });;

      console.log('this.state', this.state)

  }


  oninputchange(event){
    this.setState({email: event.target.value});

    this.setState({password: event.target.value})

  }

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            style={{marginRight: '5px'}}
            placeholder="email"
            onChange={(event)=>this.oninputchange(event)}
          />
          <input
            className="form-control"
            type="password"
            style={{marginRight: '5px'}}
            placeholder="password"
            onChange={(event)=>this.oninputchange(event)}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>this.singnup()}
          >
            Sign Up
          </button>
        </div>

     <div>{this.state.error.message}</div>
<div>   <Link  to='/signin'>
    sigin
</Link></div>
      </div>



    )
  }
}



export default SignUp;
