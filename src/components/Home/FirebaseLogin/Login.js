import React, { useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from '../../../firebase.config';
import { loginContext } from '../../../App';

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const Login = () => {

    const [isLogedin, setIsLogedin] = useContext(loginContext);

    const auth = getAuth();

    const handleGoogleAuth = () => {
        signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    setIsLogedin(user);
    console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(error);
  });
    }

    return (
        <div>
            <button onClick={handleGoogleAuth}>Google</button>
        </div>
    );
};

export default Login;