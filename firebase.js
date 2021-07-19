import firebase from 'firebase';
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCz6sO0c9VPA17lkp5Ugiw2H_J_D8xn2FY",
    authDomain: "facebook-clone-f94bd.firebaseapp.com",
    databaseURL: "https://facebook-clone-f94bd.firebaseio.com",
    projectId: "facebook-clone-f94bd",
    storageBucket: "facebook-clone-f94bd.appspot.com",
    messagingSenderId: "171708782841",
    appId: "1:171708782841:web:6c64c182f99faade386a28",
    measurementId: "G-WM48YCMERD"
};

// "!firebase.apps.length ? "... -> verifies if the firebase app is initialized
//If it exists, then use it, otherwise initialize one
const app = !firebase.apps.length ?
    firebase.initializeApp(firebaseConfig) :
    firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage }