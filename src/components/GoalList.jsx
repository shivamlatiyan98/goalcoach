import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setgoals } from '../actions';
import GoalItem from './GoalItem';
// import l from 'lodash';

class GoalList extends Component {


    componentDidMount() {
        const goals = [];
        goalRef.on('value', (snap) => {
            snap.forEach((goal) => {

                let obj = goal.val();


                let {email, title} = obj;
                const serverKey = goal.key;
                goals.push({email, title, serverKey});


            })
            console.log(goals);
            this.props.setgoals(goals)

        })
    }


    render() {
        return (
            <div>
                {

                    this.props.goals.map((goal,index) => {
                            return (
                                <GoalItem goal={goal}  key={index} user={goal.email}>
                                </GoalItem>
                            )

                        }
                    )
                }


            </div>)
    }
}

function mapStateToProps(state) {
const {goals}=state;

  return{
    goals
  };



}

export default connect(mapStateToProps, { setgoals })(GoalList);

// {
//     this.props.goals.map((goal, index) => {
//         return (
//             <GoalItem key={index} goal={goal} />
//         )
//     })
