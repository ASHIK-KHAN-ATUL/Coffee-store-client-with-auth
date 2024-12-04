// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCHo8DlLFsRx15WIz4CWPieiKN_QnCPZE",
  authDomain: "coffee-store-4b161.firebaseapp.com",
  projectId: "coffee-store-4b161",
  storageBucket: "coffee-store-4b161.firebasestorage.app",
  messagingSenderId: "835255697599",
  appId: "1:835255697599:web:d4160ebd923d6cf07b860a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);