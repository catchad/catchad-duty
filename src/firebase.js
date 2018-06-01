import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDc1NgRJygsheu4NFovSWPfaROPaxa0pt8',
  authDomain: 'catchad-duty.firebaseapp.com',
  databaseURL: 'https://catchad-duty.firebaseio.com',
  projectId: 'catchad-duty',
  storageBucket: '',
  messagingSenderId: '342598488310'
};
firebase.initializeApp(config);
const database = firebase.database();

export { database };
