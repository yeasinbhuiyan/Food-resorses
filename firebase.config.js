// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACCRIPfwILOSbSHIgoQ6wkhodqU6cY-Zw",
  authDomain: "food-resources-18f04.firebaseapp.com",
  projectId: "food-resources-18f04",
  storageBucket: "food-resources-18f04.appspot.com",
  messagingSenderId: "661849654213",
  appId: "1:661849654213:web:40ddb3a80c33c18d1c01ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app