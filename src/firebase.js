import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(login, email, password);
    console.log(response.user);
  } catch (err) {
    alert(err.message);
  }
};
