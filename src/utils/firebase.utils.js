// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxCzZtu9DOAfFbxX90TT8dOq_ae2VMJoE",
  authDomain: "fresh-vibes-f2ebf.firebaseapp.com",
  projectId: "fresh-vibes-f2ebf",
  storageBucket: "fresh-vibes-f2ebf.appspot.com",
  messagingSenderId: "980524429851",
  appId: "1:980524429851:web:1bafe7bcd9149dc027febe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// whenever a user interacts with the provider, we force them to select an account
// provider.setCustomParameters({
//   prompt: "select_account ",
// });

export const auth = getAuth(app);
// Initialize Firebase Auth provider and export it
export const googleProvider = new GoogleAuthProvider();
