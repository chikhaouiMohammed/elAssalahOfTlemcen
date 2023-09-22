import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4Gz0K-j6dXAYYo0FEk8YgeEbwUZlFmxE",
  authDomain: "elassala-app.firebaseapp.com",
  projectId: "elassala-app",
  storageBucket: "elassala-app.appspot.com",
  messagingSenderId: "209123428819",
  appId: "1:209123428819:web:9bcce3cd078a78d6c5c726",
  measurementId: "G-RCQY0CCXJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
