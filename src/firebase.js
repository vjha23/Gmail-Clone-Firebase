import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_ngR2YJi_WuWqihRaDw26zeYiVOXW3_A",
    authDomain: "clone-8522d.firebaseapp.com",
    projectId: "clone-8522d",
    storageBucket: "clone-8522d.appspot.com",
    messagingSenderId: "11204224445",
    appId: "1:11204224445:web:7e7efdc8dc57b1b12bded4",
    measurementId: "G-30S2S611NM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
