import React, { Component } from 'react';
import { Link } from 'react-router';
import {FirebaseApp} from '../firebase';

// class SignIn extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       error: {
//         message: ''
//       }
//     }
//   }
//
//   signIn() {
//     console.log('this.state', this.state);
//     const { email, password } = this.state;
//     firebaseApp.auth().signInWithEmailAndPassword(email, password)
//       .catch(error => {
//         this.setState({error})
//       })
//   }
//
//   render() {
//     return (
//       <div className="form-inline" style={{margin: '5%'}}>
//         <h2>Sign In</h2>
//         <div className="form-group">
//           <input
//             className="form-control"
//             type="text"
//             style={{marginRight: '5px'}}
//             placeholder="email"
//             onChange={event => this.setState({email: event.target.value})}
//           />
//           <input
//             className="form-control"
//             type="password"
//             style={{marginRight: '5px'}}
//             placeholder="password"
//             onChange={event => this.setState({password: event.target.value})}
//           />
//           <button
//             className="btn btn-primary"
//             type="button"
//             onClick={() => this.signIn()}
//           >
//             Sign In
//           </button>
//         </div>
//         <div>{this.state.error.message}</div>
//         <div><Link to={'/signup'}>Sign up instead</Link></div>
//       </div>
//     )
//   }
// }

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }

        this.oninputchangeemail= this.oninputchangeemail.bind(this);
        this.oninputchangpassword=this.oninputchangpassword.bind(this);

    }

    // signUp() {
    //
    //   const { email, password } = this.state;
    //   firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    //     .catch(error => {
    //       this.setState({error})
    //     })
    // }



    singnin(){

       console.log(FirebaseApp);
        const { email, password }=this.state;

        FirebaseApp.auth().signInWithEmailAndPassword(email,password).catch(error => {
            this.setState({error})
            console.log(error);
        });;

        console.log('this.state', this.state)

    }


    oninputchangeemail(event){
        this.setState({email: event.target.value});





    }

    oninputchangpassword(event){

        this.setState({password: event.target.value});



    }




    render() {
        return (
            <div className="form-inline" style={{margin: '5%'}}>
                <h2>Sign In</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        style={{marginRight: '5px'}}
                        placeholder="email"
                        onChange={(event)=>this.oninputchangeemail(event)}
                    />
                    <input
                        className="form-control"
                        type="password"
                        style={{marginRight: '5px'}}
                        placeholder="password"
                        onChange={(event)=>this.oninputchangpassword(event)}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={()=>this.singnin()}
                    >
                        Sign in
                    </button>
                </div>

                <div>{this.state.error.message}</div>
              <div>
                <Link  to='/signup'>
                  signup
                </Link>

              </div>

            </div>



        )
    }
}




export default SignIn;
