import { useEffect, useState } from "react";

import initializeauthentication from "../FireBase/FireBase.init";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
initializeauthentication();
const provider = new GoogleAuthProvider();

const PracticeUsefirebases = () => {
  const [usersdata, setUser] = useState({});
  const auth = getAuth();
  function createUserEmailandPass(details) {
    const { email, password } = details;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("createemail:", error.message);
      });
  }
  function signInEmailandPass(details) {
    const { email, password } = details;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  function handlegooglesignin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const userDetails = {
          email: email,
          name: displayName,
        };
        console.log(result.user);
        setUser(userDetails);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  // sign out
  function signOutUser() {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {});
  }
  //  get current user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
  }, [auth]);
  return {
    usersdata,
    handlegooglesignin,
    createUserEmailandPass,
    signInEmailandPass,
    signOutUser,
  };
};

export default PracticeUsefirebases;
