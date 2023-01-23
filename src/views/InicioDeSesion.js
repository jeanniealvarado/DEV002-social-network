let main = document.getElementById('main');
let footer = document.getElementById('footer');

export const inicioDeSesion = () => {
    main.innerHTML=''
    let sectionA = document.createElement('section');
    let logo = document.createElement('img');
    let sectionB = document.createElement('section');
    let form = document.createElement('form');
    let correo = document.createElement('label');
    let inputCorreo = document.createElement('input');
    let password = document.createElement('label');
    let inputPassword = document.createElement('input');
    let Recovery = document.createElement('a')
    let button = document.createElement('button');
    let sectionC = document.createElement('section');
    let p = document.createElement('p');
    let register = document.createElement('a')
    let sectionD = document.createElement('section');
    let divO = document.createElement('div');
    let option = document.createElement('p')
    let sesionCon = document.createElement('p')
    let google = document.createElement('img')
    let pFooter = document.createElement('p')

    sectionA.className = 'section-inicio-logo';
    sectionA.appendChild(logo);
    logo.src = './img/logo-big.png';
    logo.alt = 'logo-powerL';
    sectionB.className = 'section-form-inicio';
    form.className = 'form-inicio'
    sectionB.appendChild(form);
    form.appendChild(correo);
    form.appendChild(inputCorreo);
    inputCorreo.type = 'email';
    inputCorreo.placeholder = 'correo@dominio.com';
    inputCorreo.id = 'correo';
    inputCorreo.required = 'required';

    form.appendChild(password);
    form.appendChild(inputPassword);
    form.appendChild(Recovery)
    inputPassword.type = 'password';
    inputPassword.placeholder = '******';
    inputPassword.id = 'password'

    form.appendChild(button);
    button.innerText = 'Iniciar sesión';
    button.type = 'submit';
    button.id = 'enviar'

    correo.innerText = 'Correo';
    password.innerText = 'Contraseña';
    Recovery.innerText = '¿Olvidaste tu contraseña?'

    Recovery.id = 'recovey'

    sectionC.className = 'section-register';
    sectionC.appendChild(p);
    p.innerText = '¿Aún no tienes una cuenta?'
    p.appendChild(register);
    register.innerText = 'Registrate'
    register.href = '#/register'

    sectionD.className = 'section-google';
    sectionD.appendChild(divO);
    sectionD.appendChild(sesionCon)
    sesionCon.appendChild(google)

    divO.appendChild(option);

    option.innerText = 'O'
    sesionCon.innerText = 'Inicie sesión con  '
    sesionCon.appendChild(google);
    google.src = '../img/google-logo.png';
    google.alt = 'logo-Google';

    main.appendChild(sectionA);
    main.appendChild(sectionB);
    main.appendChild(sectionC);
    main.appendChild(sectionD)

    

    pFooter.innerText = 'Desarrollado por y para Laboratorians';

    footer.appendChild(pFooter);
}