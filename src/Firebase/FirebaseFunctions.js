// import { async } from 'regenerator-runtime';
import {
  initializeApp, createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup,
  GoogleAuthProvider, signInWithEmailAndPassword, getAuth, addDoc, collection,
  getFirestore, signOut, updateProfile, onAuthStateChanged,
} from './FirebaseImport.js';

// FUNCIÓN REGISTRO EN FIREBASE
export const registerFirebase = async (auth, email, password, displayName) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      sendEmailVerification(auth.currentUser);
      updateProfile(auth.currentUser, { displayName });
      return userCredential;
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};

// FUNCIÓN LOGIN CON MAIL Y CONTRASEÑA
export const login = async (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  return undefined;
};

// FUNCIÓN CREAR CREDENCIAL CURRENT USER
export const currentUser = {};
export const stateChanged = (auth) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUser.email = user.email;
      currentUser.uid = user.uid;
      currentUser.displayName = user.displayName;
      currentUser.userName = user.userName;
      console.log(`user logged in ${user.email}`);
    } else {
      console.log('user logged out ');
    }
  });
};

// FUNCIÓN REGISTRO CON GOOGLE
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

export const databaseFirestore = (post, db) => {
  addDoc(collection(db, 'users'), { post });
};

export const logOut = (auth) => {
  signOut(auth).then(() => {
  // Sign-out successful.
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  // An error happened.
  });
};
export {
  initializeApp, createUserWithEmailAndPassword, sendEmailVerification,
  signInWithPopup, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, getFirestore,
  onAuthStateChanged,
};
