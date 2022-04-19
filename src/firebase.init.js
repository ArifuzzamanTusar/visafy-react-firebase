// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeVE9xnJTSN9tS6LvHOSlemWuWAd2-Px8",
  authDomain: "sahadat-visafy.firebaseapp.com",
  projectId: "sahadat-visafy",
  storageBucket: "sahadat-visafy.appspot.com",
  messagingSenderId: "867529130426",
  appId: "1:867529130426:web:a1796990d4da2da8c7dd83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;