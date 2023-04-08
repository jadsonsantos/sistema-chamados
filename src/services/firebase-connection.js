import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFireStore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAWMzgVmRw8yR8Xx_0zT7l7ng6XksDVaTM',
  authDomain: 'tickets-635b5.firebaseapp.com',
  projectId: 'tickets-635b5',
  storageBucket: 'tickets-635b5.appspot.com',
  messagingSenderId: '568196394805',
  appId: '1:568196394805:web:f661b2728037f8e6a0267c',
  measurementId: 'G-WKK76MX9ZB',
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFireStore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, db, storage }
