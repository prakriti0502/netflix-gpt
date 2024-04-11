// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZFTo5o6eBpo_cqAdaYHJlhThswFMtjdE",
  authDomain: "netflixgpt-29391.firebaseapp.com",
  projectId: "netflixgpt-29391",
  storageBucket: "netflixgpt-29391.appspot.com",
  messagingSenderId: "719771729980",
  appId: "1:719771729980:web:35527218bbe955a0c98339",
  measurementId: "G-3SJ7SSHJ7X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
