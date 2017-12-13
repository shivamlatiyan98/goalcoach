import { SIGNED_IN } from '../constants';

let user = {
  email: null
}



export  default function (state=user,action) {

  switch (action.type){


      case SIGNED_IN:
        return {email:action.email};

      default:
        return state




  }




}
