// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVDNKKjhx4T1eiCxXD8ryfhO3-3Xr8U88",
  authDomain: "flashcard-saas-33bf9.firebaseapp.com",
  projectId: "flashcard-saas-33bf9",
  storageBucket: "flashcard-saas-33bf9.appspot.com",
  messagingSenderId: "609975427880",
  appId: "1:609975427880:web:45f11a280bd9158ea6e61d",
  measurementId: "G-X5VM6G0KD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export {db}