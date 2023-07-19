import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBX4sn6YVqknNgXFOQ0i9DEeuLz_XRP1Zw",
    authDomain: "votte-e69db.firebaseapp.com",
    projectId: "votte-e69db",
    storageBucket: "votte-e69db.appspot.com",
    messagingSenderId: "70370030931",
    appId: "1:70370030931:web:ed84ec2a0187a6d847dda6",
    measurementId: "G-GB23X6C136"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { firebase, auth, db };