import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyABeWmiCyPVwrJFUTQKayC4swGrbCONZaA",
    authDomain: "voluntip.firebaseapp.com",
    databaseURL: "https://voluntip.firebaseio.com",
    projectId: "voluntip",
    storageBucket: "voluntip.appspot.com",
    messagingSenderId: "632644491698",
    appId: "1:632644491698:web:7c3009a47a903501"
};
let app = Firebase.initializeApp(config);
export const db = app.database();