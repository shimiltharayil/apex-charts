import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDDhOsCjIHWp_EQ53EQcLCFm2-WvxHp0fI",
  authDomain: "chat-app-dae42.firebaseapp.com",
  projectId: "chat-app-dae42",
  storageBucket: "chat-app-dae42.appspot.com",
  messagingSenderId: "960213790540",
  appId: "1:960213790540:web:3a5dea853591ff97c169e9",
};
let app;
if (!app) {
  firebase.intializeApp(firebaseConfig);
}

const db = app.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()

export { db, provider, auth}


