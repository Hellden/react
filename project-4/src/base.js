import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB91v3D8vqzqjV952QngJU3Oz7T_QPMVQc',
  authDomain: 'project-4-a3a59.firebaseapp.com',
  databaseURL: 'https://project-4-a3a59.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
