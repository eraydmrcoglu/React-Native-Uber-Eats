// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
  serverTimestamp,
  orderBy,
  limit,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT-tJqdSQZllkVlg0xIVHWomuFRpVN0ic",
  authDomain: "uber-eats-clone-8c8d2.firebaseapp.com",
  projectId: "uber-eats-clone-8c8d2",
  storageBucket: "uber-eats-clone-8c8d2.appspot.com",
  messagingSenderId: "884871852377",
  appId: "1:884871852377:web:41e1294dfda85071d1dc48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
  serverTimestamp,
  orderBy,
  limit,
  query,
  db,
};
