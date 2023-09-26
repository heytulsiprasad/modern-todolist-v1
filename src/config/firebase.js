import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAryxiZM_1oHSy8VTdKrUf5n79ErfQhU_c",
  authDomain: "modern-todolist.firebaseapp.com",
  projectId: "modern-todolist",
  storageBucket: "modern-todolist.appspot.com",
  messagingSenderId: "674535101436",
  appId: "1:674535101436:web:2165d671f722b236f71879",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
