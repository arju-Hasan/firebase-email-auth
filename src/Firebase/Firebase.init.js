// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGBWXaUeU9lVAiJRO3AOCz96YLWAY9nKI",
  authDomain: "fir-email-app-bdb23.firebaseapp.com",
  projectId: "fir-email-app-bdb23",
  storageBucket: "fir-email-app-bdb23.firebasestorage.app",
  messagingSenderId: "418759397903",
  appId: "1:418759397903:web:5bd84ceccc5694c8b2c97a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);