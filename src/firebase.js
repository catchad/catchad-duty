import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/messaging';

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
const messaging = firebase.messaging();
messaging.usePublicVapidKey(
  'BFJIAnxvKaYTuI1R1AF9RfXW3Rjzp2VbTdEg9AeiSRmu4ClmAvW1BT8fecCxi4fYlU1GksSbfm9rFIiHlUQNA2U'
);

export { database, messaging };
