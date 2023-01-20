// Este es el punto de entrada de tu aplicacion
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import firebaseConfig from './ConfigFirebase.js';
import { register } from './views/register.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { emailAutentication} from './Firebase/FirebaseFunctions.js';

initializeApp(firebaseConfig);
register();

const submit = document.getElementById('enviar')

const auth = getAuth();

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let email = document.getElementById('correo').value
    //let usuaria = document.getElementById('usuaria').value
    let password = document.getElementById('password').value
    console.log(email)
    console.log(password)
    //registerFirebase(auth, email, password)
    emailAutentication(auth, email)
})
