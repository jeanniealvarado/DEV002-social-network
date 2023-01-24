// Este es el punto de entrada de tu aplicacion
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import firebaseConfig from './Firebase/ConfigFirebase.js';
import { register } from './views/register.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { registerFirebase} from './Firebase/FirebaseFunctions.js';
import { inicioDeSesion } from './views/InicioDeSesion.js';
import{route, template, router} from './lib/Router.js'


initializeApp(firebaseConfig);
const auth = getAuth();

template('inicioDeSesion', function () { //Se crea una función anónima
    inicioDeSesion(); // Le asigna a la función anónima la función about()
    //confirmarEmail(auth, window.location.href);
    const enviar = document.getElementById('enviar')
    enviar.addEventListener('click', (e) => {
        e.preventDefault();
        let email = document.getElementById('correo').value
        //let usuaria = document.getElementById('usuaria').value
        let password = document.getElementById('password').value
        console.log(email)
        console.log(password)
        
        ingresar(email, password)
    })
})

template('register', function () { //Se crea una función anónima

    register(); // Le asigna a la función anónima la función about()
    const submit = document.getElementById('enviar');
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        let email = document.getElementById('correo').value
        //let usuaria = document.getElementById('usuaria').value
        let password = document.getElementById('password').value
        console.log(email)
        console.log(password)
        registerFirebase(auth, email, password)
        //emailAutentication(auth, email)
    })
})

route('/', 'inicioDeSesion');
route('/register', 'register');

window.addEventListener('load', router); // Con el evento load se ejecuta la función router
window.addEventListener('hashchange', router); 


