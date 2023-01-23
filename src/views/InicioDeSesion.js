let main = document.getElementById('main');
let footer = document.getElementById('footer');

export const inicioDeSesion = () => {
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
    const p = document.createElement('p');
    let register = document.createElement('a')
    let sectionD = document.createElement('section');
    let option = document.createElement('p')
    let sesionCon = document.createElement('p')
    let google = document.createElement('img')
    let pFooter = document.createElement('p')

    sectionA.className = 'section-inicio-logo';
    sectionA.appendChild(logo);
    logo.src = './img/logo-big.png';
    logo.alt = 'logo-powerL';
    sectionB.className = 'section-form-inicio';
    form.className='form inicio'
    sectionB.appendChild(form);
    form.appendChild(correo);
    form.appendChild(inputCorreo);
    inputCorreo.type = 'email';
    inputCorreo.placeholder = 'correo@dominio.com';
    inputCorreo.id = 'correo';
    inputCorreo.required = 'required';

    form.appendChild(password);
    form.appendChild(inputPassword);
    inputPassword.type = 'password';
    inputPassword.placeholder = '******';
    inputPassword.id = 'password'

    form.appendChild(button);
    button.innerText = 'Enviar';
    button.type = 'submit';
    button.id = 'enviar'

    correo.innerText = 'Correo';
    password.innerText = 'Contraseña';
    Recovery.innerText = '¿Olvidaste tu contraseña?'

    form.appendChild(Recovery)
    Recovery.id = 'recovey'

    sectionC.className = 'section-register';
    sectionC.appendChild(p)
    p.appendChild(register)
    p.innerText = '¿Aún no tienes una cuenta?'
    register.innerText = 'Registrate'

    sectionD.className = 'section-google';
    sectionD.appendChild(option)
    sectionD.appendChild(sesionCon)
    sesionCon.appendChild(google)

    option.innerText = 'O'
    sesionCon.innerText = 'Inicie sesión con'

    main.appendChild(sectionA);
    main.appendChild(sectionB);
    main.appendChild(sectionC);
    main.appendChild(sectionD)



    pFooter.innerText = 'Desarrollado por y para Laboratorians';

    footer.appendChild(pFooter);
}