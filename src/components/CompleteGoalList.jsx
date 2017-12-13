import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setcompleted } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {
  //
  //
  // }

    componentDidMount() {


        completeGoalRef.on('value', snap => {
                let completeGoals = [];
                snap.forEach(completeGoal => {
                  const { email, title } = completeGoal.val();
                  completeGoals.push({email, title})
                })

            console.log('c',completeGoals);


                this.props.setcompleted(completeGoals);
              })




    }




  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    return (
      <div>
        {
          this.props.completegoals.map((completeGoal, index) => {
            const { title, email } = completeGoal;
            return (
              <div key={index}>
                <strong>{title}</strong> completed by <em>{email}</em>
              </div>
            )
          })
        }
        <button
          className="btn btn-primary"
          onClick={() => this.clearCompleted()}
        >
          Clear All
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('stata',state);
  const { completegoals } = state;
  return {
    completegoals
  }
}

export default connect(mapStateToProps, { setcompleted })(CompleteGoalList);
