import firebase from 'firebase';
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDRyypKHmWkK1d8UWPzcCdg9rYs4CCVJTI",
    authDomain: "todo-app-e7c08.firebaseapp.com",
    databaseURL: "https://todo-app-e7c08.firebaseio.com",
    projectId: "todo-app-e7c08",
    storageBucket: "todo-app-e7c08.appspot.com",
    messagingSenderId: "897272793758",
    appId: "1:897272793758:web:fc3d059727b7d24780498f",
    measurementId: "G-ERB4EBF6E6"
});
const db=firebaseApp.firestore();
export default db;
