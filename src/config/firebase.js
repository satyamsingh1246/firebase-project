// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRkxnNGH77y-pT4D2VcLdUz2OwH89ad2w",
  authDomain: "vite-contact-fdc58.firebaseapp.com",
  projectId: "vite-contact-fdc58",
  storageBucket: "vite-contact-fdc58.appspot.com",
  messagingSenderId: "331001714661",
  appId: "1:331001714661:web:97cfb549557a2eb0be010c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);