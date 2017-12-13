// import * as firebase from 'firebase';
//
// const config = {
//   apiKey: "AIzaSyDO9Fnyf1YOwsZJ46RshxAEYbZJLNa-19w",
//   authDomain: "goalcoach-6f23e.firebaseapp.com",
//   databaseURL: "https://goalcoach-6f23e.firebaseio.com",
//   storageBucket: "goalcoach-6f23e.appspot.com",
//   messagingSenderId: "568769933089"
// };
//
// export const firebaseApp = firebase.initializeApp(config);
// export const goalRef = firebase.database().ref('goals');
// export const completeGoalRef = firebase.database().ref('completeGoals');





import  * as  firebase from 'firebase';


const config=  {
    apiKey: "AIzaSyDTxxiI0j24XwgZNtchU1NYuMoqg8kCjTo",
    authDomain: "goal-coach-16713.firebaseapp.com",
    databaseURL: "https://goal-coach-16713.firebaseio.com",
    projectId: "goal-coach-16713",
    storageBucket: "goal-coach-16713.appspot.com",
    messagingSenderId: "160323293810"
};


export const FirebaseApp =firebase.initializeApp(config);

export const goalRef=firebase.database().ref('goals');

export const  completeGoalRef =firebase.database().ref('complteGoals')










