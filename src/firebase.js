import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: `${process.env.REACT_APP_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.REACT_APP_APP_ID,
    measurementId: process.REACT_APP_MEASUREMENT_ID,
  })
  .auth();
