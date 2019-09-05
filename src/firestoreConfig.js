import firebase from 'firebase';
import 'firebase/firebase-firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDPut7JIuqVf5umWNU8cQEEKwTZCtVxoq8",
    authDomain: "wolf-challenge.firebaseapp.com",
    databaseURL: "https://wolf-challenge.firebaseio.com",
    projectId: "wolf-challenge",
})

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
})

export default db;
