// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpaexsXteKQ_dEtKAZGRNfcKmFWEkAMmE",
  authDomain: "plmar-shs-attendance.firebaseapp.com",
  projectId: "plmar-shs-attendance",
  storageBucket: "plmar-shs-attendance.firebasestorage.app",
  messagingSenderId: "557269360891",
  appId: "1:557269360891:web:30cf6e109192b93c19105e",
  measurementId: "G-98L75C3WZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);