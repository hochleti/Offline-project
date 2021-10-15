import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBHsQgEqfF04HPbUQU0C8jQ5mYcFZ7NODk",
    authDomain: "offline-ea045.firebaseapp.com",
    databaseURL: "https://offline-ea045-default-rtdb.firebaseio.com",
    projectId: "offline-ea045",
    storageBucket: "offline-ea045.appspot.com",
    messagingSenderId: "383467579431",
    appId: "1:383467579431:web:ab37fc8dd6776d5d374602",
    measurementId: "G-7YXYN7DE4Q"
};


let Firebase;
// Initialize Firebase
if (firebase.apps.length === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;