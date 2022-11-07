// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
//   analytics
} from "firebase/auth";
import { toastSuccessNotify, toastErrorNotify, toastWarnNotify } from "../helper/Toastfy.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyBQ0kEK1kxCESVj0DAxj2q62Zu9LlNhyyY",
  authDomain: "shopping-be9b7.firebaseapp.com",
  projectId: "shopping-be9b7",
  storageBucket: "shopping-be9b7.appspot.com",
  messagingSenderId: "1031529093124",
  appId: "1:1031529093124:web:b324c5e86f17eacb78bd51",
  measurementId: "G-8N50373R0Y"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, { displayName: displayName });
    console.log(userCredential);
    toastSuccessNotify("Registered is successfully!")
    navigate("/login");
    console.log("sadık")
  } catch (error) {
    toastErrorNotify(error.message);
    console.log("sadı")
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};

export const logOut = (navigate) => {
  signOut(auth);
  toastWarnNotify("logged out successfully");
  navigate("login")
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("home");
     toastSuccessNotify("Login successfully!")
  } catch (error) {
    toastErrorNotify(error.message);
  }
};

export const signUpProvider = (navigate) => {
  
  const provider = new GoogleAuthProvider();
  
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("home");
      toastSuccessNotify("Login successfully!!");
    })
    .catch((error) => {
      // Handle Errors here.
      toastErrorNotify(error);
    });
};
