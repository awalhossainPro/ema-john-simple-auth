// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIuB0pdtIroApEhDQdeX_WdvxRhIDwj8s",
  authDomain: "ema-john-simple-f7174.firebaseapp.com",
  projectId: "ema-john-simple-f7174",
  storageBucket: "ema-john-simple-f7174.appspot.com",
  messagingSenderId: "904344057243",
  appId: "1:904344057243:web:bb1df863b34313712e1d3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;