let main = document.getElementById('main');
let footer = document.getElementById('footer');

export const timeline = () => {
    main.innerHTML = '';
    footer.innerHTML = '';

    let sectionA = document.createElement('section');
    let logo = document.createElement('img');
    let holaUsuaria = document.createElement('p');
    let sectionB = document.createElement('section');
    let inputPost = document.createElement('textarea');
    let botonEnviar = document.createElement('button');
    let sectionC = document.createElement('section');
    let nombrePost = document.createElement('p');
    let divPosted = document.createElement('div');
    let eliminar = document.createElement('i');
    let editar = document.createElement('i');
    let fecha = document.createElement('p');
    let signOut = document.createElement('i');

    sectionA.className = 'section-head';
    logo.className = 'logo-timeline';
    logo.src = './img/logo-big.png';
    logo.alt = 'logo-powerL';
    holaUsuaria.className = 'hola-Usuaria';
    eliminar.className = 'fa-solid fa-trash-can';
    editar.className = 'fa-regular fa-pen-to-square';
    signOut.className = 'fa-solid fa-arrow-right-from-bracket'
    sectionA.appendChild(logo);
    sectionA.appendChild(holaUsuaria);

    sectionB.className = 'section-posting';
    inputPost.className = 'input-post';
    botonEnviar.className = 'boton-enviar';

    sectionB.appendChild(inputPost);
    sectionB.appendChild(botonEnviar);

    sectionC.className('section-timeline');
    nombrePost.className = 'autora-post';
    divPosted.className = 'div-posted';
    eliminar.className = 'boton-eliminar';
    editar.className = 'boton-editar';
    fecha.className = 'fecha-post';
    sectionC.appendChild(nombrePost);
    sectionC.appendChild(divPosted);
    sectionC.appendChild(fecha)
    fecha.appendChild(eliminar);
    fecha.appendChild(editar);

    signOut.className = 'sign-out-botton';
    footer.appendChild(signOut);
    
    timeline.href = '#/timeline';


} 
