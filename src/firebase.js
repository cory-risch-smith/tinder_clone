import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa1mXQYpMCusNQTEzXO4NDgTT-ZLg9jAQ",
  authDomain: "tinder-react-rebuild.firebaseapp.com",
  databaseURL: "https://tinder-react-rebuild.firebaseio.com",
  projectId: "tinder-react-rebuild",
  storageBucket: "tinder-react-rebuild.appspot.com",
  messagingSenderId: "1003395949209",
  appId: "1:1003395949209:web:c51dda1f46073053c9ce08",
  measurementId: "G-L2GBD8PLEG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
