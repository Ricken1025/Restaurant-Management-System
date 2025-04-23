// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Import Firestore
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCMB-oKUOYFWcwcaBwS6GSfkjf67BAQYo",
  authDomain: "pro1-1655e.firebaseapp.com",
  projectId: "pro1-1655e",
  storageBucket: "pro1-1655e.firebasestorage.app",
  messagingSenderId: "104319925147",
  appId: "1:104319925147:web:506fb031629d9a8aee3f3e",
  measurementId: "G-R0S4Q9TRQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Firebase Auth and Firestore
export const db = getFirestore(app);
export {auth };

export const storage = getStorage(app);