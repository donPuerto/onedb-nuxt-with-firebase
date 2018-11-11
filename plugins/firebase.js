// Firebase App is always required and must be first
var firebase = require('firebase/app')

// Add additional services that you want to use
require('firebase/auth')
require('firebase/database')
require('firebase/firestore')
require('firebase/messaging')
require('firebase/functions')

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDtQK3o2ewCtJ9qFWm0ZMLZGZXqqg8rUiA',
  authDomain: 'test-pod-83cef.firebaseapp.com',
  databaseURL: 'https://test-pod-83cef.firebaseio.com',
  projectId: 'test-pod-83cef',
  storageBucket: 'test-pod-83cef.appspot.com',
  messagingSenderId: '932467577127'
}
firebase.initializeApp(config)

firebase.firestore().settings({ timestampsInSnapshots: true })

const db = firebase.firestore()
const storage = firebase.storage() //if use storage

export { storage, db }

// In component:

// import { db } from '~/plugins/firebase.js'

// data() {
//   return {
//     users: []
//   }
// },
// mounted() {
//   db.collection("users").get().then((querySnapshot) => {
//     this.users = querySnapshot.docs.map(doc =>
//       Object.assign({ id: doc.id }, doc.data())
//     )
//   })
// }
