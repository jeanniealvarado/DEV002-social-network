let main = document.getElementById('main');
let footer = document.getElementById('footer');

export const register = () => {
    let sectionA = document.createElement('section');
    let logo = document.createElement('img');
    let sectionB = document.createElement('section');
    let registrate = document.createElement('h2');
    let sectionC = document.createElement('section');
    let form = document.createElement('form');
    let correo = document.createElement('label');
    let inputCorreo = document.createElement('input');
    let usuaria = document.createElement('label');
    let inputUsuaria = document.createElement('input');
    let password = document.createElement('label');
    let inputPassword = document.createElement('input');
    let button = document.createElement('button');
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

    correo.innerText = 'Correo';
    usuaria.innerText = 'Usuaria';
    password.innerText = 'Contraseña';

    form.appendChild(usuaria);
    form.appendChild(inputUsuaria);
    inputUsuaria.type = 'text';
    inputUsuaria.placeholder = 'usuariaCoolDEV002';

    form.appendChild(password);
    form.appendChild(inputPassword);
    inputPassword.type = 'password';
    inputPassword.placeholder = '******';

    form.appendChild(button);
    button.innerText = 'Enviar';
    button.type = 'button';

    main.appendChild(sectionA);
    main.appendChild(sectionB);
    main.appendChild(sectionC);

    p.innerText = 'Desarrollado por y para Laboratorians';

    footer.appendChild(p);
}

