import Firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyABeWmiCyPVwrJFUTQKayC4swGrbCONZaA',
  authDomain: 'voluntip.firebaseapp.com',
  databaseURL: 'https://voluntip.firebaseio.com',
  projectId: 'voluntip',
  storageBucket: 'voluntip.appspot.com',
  messagingSenderId: '632644491698',
  appId: '1:632644491698:web:7c3009a47a903501'
}
const app = Firebase.initializeApp(config)
const db = app.database()
export default db
