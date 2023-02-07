// import { async } from 'regenerator-runtime';
import {
  initializeApp, createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup,
  GoogleAuthProvider, signInWithEmailAndPassword, getAuth, addDoc, collection,
  getFirestore, signOut, updateProfile, onAuthStateChanged,
} from './FirebaseImport.js';

// FUNCIÓN REGISTRO EN FIREBASE
export const registerFirebase = async (auth, email, password, displayName) => {
const textAreaPost = document.getElementById('postear')
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


// FUNCIÓN LOGIN CON EMAIL Y CONTRASEÑA

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

//        CREAR OTRA COLECCIÓN

export const databaseFirestore = (post, db) => {
  // .then((userCredential) => {
    addDoc(collection(db,'users').doc(userCredential.user.uid).set( { post } ));

  //    db.collection('users').doc(userCredential.user.uid).set({
  //     post
  //   })
  // });
//  .catch((error) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
// An error happened.
};
// addDoc(collection(db, 'users').doc(userCredential.user.uid).set( { post } ));


//         CERRAR SESIÓN
export const logOut = (auth) => {
  signOut(auth).then(() => {
  // Sign-out successful.
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  // An error happened.
  });
};

// ESCRIBIR COLLECTION

// class usuariaData {
//   constructor(name, uid, posts) {
//     this.name = auth.currentUser.displayName;
//     this.uid = auth.currentUser.uid;
//     this.post = post;
//   }

//   toString() {
//     return `${this.name}, ${this.uid}, ${this.post}`;
//   }
// }

// Firestore data converter
// const usuariaConverter = {
//   toFirestore: (usuariaData) => ({
//     name: city.name,
//     state: city.state,
//     country: city.country,
//   }),
//   fromFirestore: (snapshot, options) => {
//     const data = snapshot.data(options);
//     return new City(data.name, data.state, data.country);
//   },
// };

export const addPost = (post) => addDoc(collection(db, 'users'), {
  post,
  user: auth.currentUser.displayName,
  uid: auth.currentUser.uid,
  // likes: 0,
  // likes: [],
});

export {
  initializeApp, createUserWithEmailAndPassword, sendEmailVerification,
  signInWithPopup, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, getFirestore,
  onAuthStateChanged,
};
