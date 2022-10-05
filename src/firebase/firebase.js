import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBlaRn1veix8UPI9SzsveFLPxQkbnylr5E",
  authDomain: "comision38090.firebaseapp.com",
  projectId: "comision38090",
  storageBucket: "comision38090.appspot.com",
  messagingSenderId: "372234253135",
  appId: "1:372234253135:web:0ff8f9c1df98d4d84a8b3a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)