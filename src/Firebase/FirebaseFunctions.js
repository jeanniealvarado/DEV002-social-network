// import { async } from 'regenerator-runtime';
import {
  initializeApp, createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup,
  GoogleAuthProvider, signInWithEmailAndPassword, getAuth, addDoc, collection,
  getFirestore, signOut, updateProfile, onAuthStateChanged, getDoc, getDocs, onSnapshot,
  db, auth, provider, deleteDoc,
  updateDoc, doc, Timestamp, arrayRemove, arrayUnion,
} from './FirebaseImport.js';

//           FUNCIÓN REGISTRO EN FIREBASE
export const registerFirebase = async (email, password, displayName) => {
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

//       FUNCIÓN LOGIN CON EMAIL Y CONTRASEÑA

export const login = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
  //   .then((userCredential) => {
  //     const user = userCredential.user;
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     alert(errorMessage);
  //   });
  // return undefined;
};

export const userState = (user) => onAuthStateChanged(auth, user);
export const user1 = () => auth.currentUser;

//          FUNCIÓN REGISTRO CON GOOGLE
export const registerGoogle = () => {
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


//          MOSTRAR LOS POSTS

// Para guardar Posts
export const publicaciones = (post) => {
  addDoc(collection(db, 'users'), {
    post,
    // name: auth.currentUser.displayName,
    // uid: auth.currentUser.uid,
    likes: [],
    createdDateTime: Timestamp.fromDate(new Date()),
  });
};
export const saveUser = (name, uid, email) => addDoc(collection(db, 'users'), {
  name,
  uid,
  email,
  createdDateTime: Timestamp.fromDate(new Date()),
});
// para obtener data de las colecciones
export const getAllPosts = () => getDocs(collection(db, 'users'));

// para actualizar en tiempo real
export const onGetPost = (callback) => onSnapshot(collection(db, 'users'), callback);

// para borrar los posts
export const deletePost = (id) => deleteDoc(doc(db, 'users', id));

// para editar posts
export const editPost = (id) => getDoc(doc(db, 'users', id));

// actualizar publicaciones
export const updateNotes = (id, newFile) => updateDoc(doc(db, 'users', id), newFile);
export const getPost = (id) => getDoc(doc(db, 'users', id));
export const editLike = (id) => getDoc(doc(db, 'users', id));
export const datePost = (querySnapshot) => {
  const q = query(collection(db, 'tasks'), orderBy('createdDateTime', 'desc'));
  onSnapshot(q, querySnapshot);
};

// -----LIKES----------------------

export const giveLike = (id, nuevoLike) => {
  updateDoc(doc(db, 'tasks', id), {
    likes:
      arrayUnion(
        nuevoLike,
      ),
  });
  // .then(() => console.log("+1 like"))
  // .catch((error) => console.error("Error", error));
};

export const disLike = (id, viejoLike) => {
  updateDoc(doc(db, 'tasks', id), {
    likes:
      arrayRemove(
        viejoLike,
      ),
  });
};

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

// export const addPost = (post) => addDoc(collection(db, 'users'), {
//   post,
//   user: auth.currentUser.displayName,
//   uid: auth.currentUser.uid,
//   // likes: 0,
//   // likes: [],
// });

export {
  initializeApp, createUserWithEmailAndPassword, sendEmailVerification,
  signInWithPopup, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, getFirestore,
  onAuthStateChanged,
};
