// Este es el punto de entrada de tu aplicacion
import { inicioDeSesion } from './views/InicioDeSesion.js';
import { register } from './views/register.js';
import { timeline } from './views/timeline.js';
import { route, template, router } from './lib/Router.js';

template('InicioDeSesion', () => {
  inicioDeSesion();
});

template('register', () => {
  register();
});

template('timeline', () => {
  timeline();
});

route('/', 'inicioDeSesion');
route('/register', 'register');
route('/timeline', 'timeline');

window.addEventListener('load', router); // Con el evento load se ejecuta la función router
window.addEventListener('hashchange', router);
