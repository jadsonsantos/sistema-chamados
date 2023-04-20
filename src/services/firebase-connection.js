import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAWMzgVmRw8yR8Xx_0zT7l7ng6XksDVaTM',
  authDomain: 'tickets-635b5.firebaseapp.com',
  projectId: 'tickets-635b5',
  storageBucket: 'tickets-635b5.appspot.com',
  messagingSenderId: '568196394805',
  appId: '1:568196394805:web:f661b2728037f8e6a0267c',
  measurementId: 'G-WKK76MX9ZB',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebaseApp.auth()
const db = firebaseApp.firestore()
const storage = firebaseApp.storage()

export { auth, db, storage }
