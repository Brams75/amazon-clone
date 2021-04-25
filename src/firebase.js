import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCuXmysALEcF54DKWCo3ncUXfKsqDh3fvU",
  authDomain: "clone-70955.firebaseapp.com",
  projectId: "clone-70955",
  storageBucket: "clone-70955.appspot.com",
  messagingSenderId: "909356852318",
  appId: "1:909356852318:web:e90968fa2328af537b40cf",
  measurementId: "G-LPMEPP391Z",
});

export const db = firebase.firestore();

export default db;
