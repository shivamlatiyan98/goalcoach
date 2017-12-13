import { SET_COMPLETED } from '../constants';

export default function  (state = [], action)  {
  switch(action.type) {
    case SET_COMPLETED:
      const { completegoals } = action;
      return completegoals;
    default:
      return state;
  }

}



