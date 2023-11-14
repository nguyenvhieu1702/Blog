// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF9KoXQpjIZMk2s1TcD2kxfAdwXOqYH9M",
  authDomain: "blog-70984.firebaseapp.com",
  projectId: "blog-70984",
  storageBucket: "blog-70984.appspot.com",
  messagingSenderId: "668578593313",
  appId: "1:668578593313:web:5f004ef2e65e88206f8160",
  measurementId: "G-TFVLDME5L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);