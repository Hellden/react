import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAri0dkC4xEPRwyB5lTZJoVXBfD59lp-OA',
  authDomain: 'project-3-b8958.firebaseapp.com',
  databaseURL: 'https://project-3-b8958.firebaseio.com'
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
