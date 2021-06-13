import firebase from 'firebase';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: 'chatter-58fce.firebaseapp.com',
    projectId: 'chatter-58fce',
    storageBucket: 'chatter-58fce.appspot.com',
    messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_APP_ID}`,
  })
  .auth();
