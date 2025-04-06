// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7e987.firebaseapp.com",
  projectId: "mern-estate-7e987",
  storageBucket: "mern-estate-7e987.firebasestorage.app",
  messagingSenderId: "283689984169",
  appId: "1:283689984169:web:9320e8183bcb55a4ad89b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);