// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUEOoEyiPzmdU87b-CjaWtJtXj_8cc5F8",
  authDomain: "rawshare-d6629.firebaseapp.com",
  databaseURL: "https://rawshare-d6629-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rawshare-d6629",
  storageBucket: "rawshare-d6629.appspot.com",
  messagingSenderId: "640619960438",
  appId: "1:640619960438:web:34ae75012939281cbb2757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const productsRef = ref(db, 'products');
export const usersRef = ref(db, 'users');

