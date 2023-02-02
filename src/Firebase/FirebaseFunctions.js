import {
  createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup,
  GoogleAuthProvider, getAuth, signInWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { set, ref } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'; //version

// import { isSignInWithEmailLink, signInWithEmailLink } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
// initializeApp(firebaseConfig);

//FUNCIÓN DE REGISTRO CON FIREBASE
export const registerFirebase = (auth, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email
      });
      // console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    })
  };


    //FUNCIÓN EMAIL DE VERIFICACIÓN
    export const validateEmail = async (email) => {
      
      try{
        await sendEmailVerification(auth.currentUser);
        return Promise.resolve(userId)}
      } catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return Promise.reject(error)
        //alert(errorMessage);
  });
  

export const registerGoogle = (auth, provider) => {
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};

export {
  initializeApp, createUserWithEmailAndPassword, sendEmailVerification,
  signInWithPopup, GoogleAuthProvider, getAuth, signInWithEmailAndPassword,
};