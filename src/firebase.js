import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";
import "firebase/compat/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBioNvcfa5YxXo4arHwKLOVePNFox5sCrQ",
    authDomain: "hotstar-clone-fc415.firebaseapp.com",
    projectId: "hotstar-clone-fc415",
    storageBucket: "hotstar-clone-fc415.appspot.com",
    messagingSenderId: "233599524080",
    appId: "1:233599524080:web:a38202e52864023e2a3635"
  };

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth= firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
const storage= firebase.storage;

export {auth,provider,storage};
export default db;
