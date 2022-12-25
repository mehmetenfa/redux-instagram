import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "./utils";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUGW21PawzVoy3W_jnn3dUFKPqS_MM-0k",
  authDomain: "redux-instagram.firebaseapp.com",
  projectId: "redux-instagram",
  storageBucket: "redux-instagram.appspot.com",
  messagingSenderId: "59243538153",
  appId: "1:59243538153:web:c7fe1d05aced718962f278",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    userHandle(user || false);
  
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error(err.code);
  }
};

export const logout = async () => {
  try {
    await signOut(auth)
  } catch (err) {
    toast.error(err.code)
  }
}