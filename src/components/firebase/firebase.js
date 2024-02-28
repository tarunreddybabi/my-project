// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMj80Ld8cpKk90KT9TygTCpD2Xc92UfLA",
  authDomain: "expense-tracker-411ad.firebaseapp.com",
  projectId: "expense-tracker-411ad",
  storageBucket: "expense-tracker-411ad.appspot.com",
  messagingSenderId: "305681560899",
  appId: "1:305681560899:web:3c5864e1eb73ffd7506bf6",
  measurementId: "G-FR1872KRQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };