import initializeauthentication from "../FireBase/FireBase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
initializeauthentication();
const UseFirebase = () => {
  const [user, setuser] = useState({});
  const auth = getAuth();
  const handlersignin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("signin", errorMessage);
      })
      .finally(() => console.log("finally"));
  };
  const handlersignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setuser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => console.log("finally"));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setuser(user);
      } else {
        setuser({});
      }
    });
  }, [auth]);
  // backend data
 
  return {
    user,
    handlersignin,
    handlersignout
  };
};

export default UseFirebase;
