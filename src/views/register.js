const main = document.getElementById('main');
const footer = document.getElementById('footer');

export const register = () => {
  main.innerHTML = '';
  footer.innerHTML = '';
  const sectionA = document.createElement('section');
  const logo = document.createElement('img');
  const sectionB = document.createElement('section');
  const registrate = document.createElement('h2');
  const sectionC = document.createElement('section');
  const form = document.createElement('form');
  const correo = document.createElement('label');
  const inputCorreo = document.createElement('input');
  const usuaria = document.createElement('label');
  const inputUsuaria = document.createElement('input');
  const password = document.createElement('label');
  const inputPassword = document.createElement('input');
  const button = document.createElement('button');
  const p = document.createElement('p');

  sectionA.className = 'section-logo';
  sectionA.appendChild(logo);
  logo.src = './img/logo-big.png';
  logo.alt = 'logo-powerL';
  sectionB.className = 'section-h2';
  sectionB.appendChild(registrate);
  registrate.innerText = 'Regístrate';

  sectionC.className = 'section-form';

  sectionC.appendChild(form);
  form.appendChild(correo);
  form.appendChild(inputCorreo);
  inputCorreo.type = 'email';
  inputCorreo.placeholder = 'correo@dominio.com';
  inputCorreo.id = 'correo';
  inputCorreo.required = 'required';

  correo.innerText = 'Correo';
  usuaria.innerText = 'Usuaria';
  password.innerText = 'Contraseña';

  form.appendChild(usuaria);
  form.appendChild(inputUsuaria);
  inputUsuaria.type = 'text';
  inputUsuaria.placeholder = 'usuariaCoolDEV002';
  inputUsuaria.id = 'usuaria';

  form.appendChild(password);
  form.appendChild(inputPassword);
  inputPassword.type = 'password';
  inputPassword.placeholder = '******';
  inputPassword.id = 'password';
  inputPassword.minLength = '6';
  inputPassword.maxLength = '12';
  inputPassword.required = 'required';

  form.appendChild(button);
  button.innerText = 'Enviar';
  button.type = 'submit';
  button.id = 'enviar';
  main.appendChild(sectionA);
  main.appendChild(sectionB);
  main.appendChild(sectionC);

  p.innerText = 'Desarrollado por y para Laboratorians';

  footer.appendChild(p);
};
