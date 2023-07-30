import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAYz2HN7mTq6lo5Z7rFkSYpyypX7sC8ARI",
  authDomain: "netflix-clone-799ff.firebaseapp.com",
  projectId: "netflix-clone-799ff",
  storageBucket: "netflix-clone-799ff.appspot.com",
  messagingSenderId: "609259307862",
  appId: "1:609259307862:web:afd62fedd119c7e8748cf7",
  measurementId: "G-2LPBE3FFYN"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth= getAuth(app);