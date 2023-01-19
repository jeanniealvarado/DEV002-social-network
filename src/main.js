// Este es el punto de entrada de tu aplicacion

import { register } from './views/register.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import firebaseConfig from './Firebase/ConfigFirebase.js'


initializeApp(firebaseConfig)
register();

const submit = document.getElementById('enviar')
const auth = getAuth();

submit.addEventListener('click', (e) => {
   // e.preventDefault();
    let email = document.getElementById('correo').value
    //let usuaria = document.getElementById('usuaria').value
    let password = document.getElementById('password').value
    console.log(email)
    console.log(password)
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
})
