// Este es el punto de entrada de tu aplicacion

// import { async } from 'regenerator-runtime';
import firebaseConfig from './Firebase/ConfigFirebase.js';
import { register } from './views/register.js';
import { timeline } from './views/timeline.js';
import { inicioDeSesion } from './views/InicioDeSesion.js';
import { route, template, router } from './lib/Router.js';
import {
  registerFirebase, registerGoogle, getAuth, GoogleAuthProvider, initializeApp, login,
  getFirestore, logOut, addPost, databaseFirestore,
} from './Firebase/FirebaseFunctions.js';

initializeApp(firebaseConfig);
export const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();
// function login(email, password) {
//   if (email === '' || password === '') {
//     alert('Completa los datos requeridos');
//   } else {
//     return window.location = 'http://localhost:3000/#/timeline';
//   }
// }

//             TEMPLATE LOGIN

template('inicioDeSesion', () => { // Se crea una función anónima
  inicioDeSesion(); // Le asigna a la función anónima la función about()
  // stateChanged();
  const signIn = document.getElementById('enviar');
  signIn.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
    if (login(auth, email, password) === auth.currentUser) {
      return route('/timeline', 'timeline');
    }
    return inicioDeSesion();
  });
  const google = document.getElementById('google');
  google.addEventListener('click', (e) => {
    e.preventDefault();
    registerGoogle(auth, provider);
  });
});

//                 TEMPLATE REGISTER

template('register', () => { // Se crea una función anónima
  register(); // Le asigna a la función anónima la función about()
  const submit = document.getElementById('enviar');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('correo').value;
    // let usuaria = document.getElementById('usuaria').value
    const password = document.getElementById('password').value;
    registerFirebase(auth, email, password);
    // emailAutentication(auth, email)
    if (email === '' || password === '') {
      alert('Completa los datos requeridos');
    } else {
      alert('El correo de verificación ha sido enviado a su bandeja de entrada');
    }

    //   const submit = document.getElementById('enviar');
    //   submit.addEventListener('click', async (e) => {
    //     e.preventDefault();
    //     try {
    //       const email = document.getElementById('correo').value;
    //       const usuaria = document.getElementById('usuaria').value;
    //       const password = document.getElementById('password').value;
    //       const userCredential = await registerFirebase(auth, email, password, usuaria);
    //       console.log(userCredential);
    //     } catch (error) {
    //     // emailAutentication(auth, email)
    //       if (email === '' || password === '') {
    //         alert('Completa los datos requeridos');
    //       } else {
    //         alert('El correo de verificación ha sido enviado a su bandeja de entrada');
    //       }
  });
});

// });

//                  TEMPLATE TIMELINE

template('timeline', () => {
  timeline();
  const publicar = document.getElementById('publicar');
  const userLogout = document.getElementById('userSignOut');
  const sectionPostear = document.getElementById('postear');
  publicar.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      const post = document.getElementById('postear').value;
      await addPost(post);
      console.log(post);
      databaseFirestore(post, db);
      sectionPostear.reset();
    } catch (error) {
      console.log(error);
    }
  });
  // const postFilter = doc.id === user;
  // if (postFilter) {
  //   namePost
  // }
  userLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logOut(auth);
    return inicioDeSesion();
  });
});

route('/', 'inicioDeSesion');
route('/register', 'register');
route('/timeline', 'timeline');

window.addEventListener('load', router); // Con el evento load se ejecuta la función router
window.addEventListener('hashchange', router);

// export { login }
