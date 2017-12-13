import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../constants';
//
// export function logUser(email) {
//   const action = {
//     type: SIGNED_IN,
//     email
//   }
//   return action;
// }
//
// export function setGoals(goals) {
//   const action = {
//     type: SET_GOALS,
//     goals
//   }
//   return action;
// }
//
// export function setCompleted(completeGoals) {
//   const action = {
//     type: SET_COMPLETED,
//     completeGoals
//   }
//   return action;
// }


export  function logUser(email) {
    console.log(email);
  return {
    type:SIGNED_IN,
     email:email


  };



}

export function setgoals(goals) {

    return{
        type:SET_GOALS,
        goals

    }




}





export  function  setcompleted(completegoals) {

    return{
        type:SET_COMPLETED,
        completegoals

    }



}





















