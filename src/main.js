// Este es el punto de entrada de tu aplicacion
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import firebaseConfig from './Firebase/ConfigFirebase.js';
import { register } from './views/register.js';
import { timeline } from './views/timeline.js';
import { registerFirebase, registerGoogle } from './Firebase/FirebaseFunctions.js';
import { inicioDeSesion } from './views/InicioDeSesion.js';
import { route, template, router } from './lib/Router.js';

initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

template('inicioDeSesion', () => { // Se crea una función anónima
  inicioDeSesion(); // Le asigna a la función anónima la función about()
  const google = document.getElementById('google');
  google.addEventListener('click', (e) => {
    e.preventDefault();
    registerGoogle(auth, provider);
  });

  const signIn = document.getElementById('enviar');
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error.message;
    }
    signIn.addEventListener('click', login);
    window.location = 'http://localhost:3000/#/timeline';
  };

//   function login(e) {
//     e.preventDefault();
//     const email = document.getElementById('correo').value;
//     const password = document.getElementById('password').value;
//     if (email == '' || password == '') {
//       alert('Completa los datos requeridos');
//     } else {
//       return window.location = 'http://localhost:3000/#/timeline';
//     }
//   }
});

template('register', () => { // Se crea una función anónima
  register(); // Le asigna a la función anónima la función about()
  const submit = document.getElementById('enviar');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('correo').value;
    // let usuaria = document.getElementById('usuaria').value
    const password = document.getElementById('password').value;
    console.log(email);
    console.log(password);
    registerFirebase(auth, email, password);

    // emailAutentication(auth, email)
    if (email == '' || password == '') {
      alert('Completa los datos requeridos');
    } else {
      alert('El correo de verificación ha sido enviado a su bandeja de entrada');
    }
  });
});

template('timeline', () => {
  timeline();
});

route('/', 'inicioDeSesion');
route('/register', 'register');
route('/timeline', 'timeline');

window.addEventListener('load', router); // Con el evento load se ejecuta la función router
window.addEventListener('hashchange', router);
