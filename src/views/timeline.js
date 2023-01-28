let main = document.getElementById('main');
let footer = document.getElementById('footer');

export const timeline = () => {
    main.innerHTML = '';
    footer.innerHTML = '';

    let section1 = document.createElement('section');
    let logo = document.createElement('img');
    let holaUsuaria = document.createElement('p');
    let section2 = document.createElement('section');
    let inputPost = document.createElement('textarea');
    let botonEnviar = document.createElement('button');
    let section3 = document.createElement('section');
    let nombrePost = document.createElement('p');
    let divPosted = document.createElement('div');
    let eliminar = document.createElement('i');
    let editar = document.createElement('i');
    let fecha = document.createElement('p');
    let signOut = document.createElement('i');

    section1.className = 'section-head';
    logo.className = 'logo-timeline';
    logo.src = './img/logo-big.png';
    logo.alt = 'logo-powerL';
    holaUsuaria.className = 'hola-Usuaria';
    eliminar.className = 'fa-solid fa-trash-can';
    editar.className = 'fa-regular fa-pen-to-square';
    signOut.className = 'fa-solid fa-arrow-right-from-bracket'
    section1.appendChild(logo);
    section1.appendChild(holaUsuaria);

    section2.className = 'section-posting';
    inputPost.className = 'input-post';
    botonEnviar.className = 'boton-enviar';

    section2.appendChild(inputPost);
    section2.appendChild(botonEnviar);

    section3.className = 'section-timeline';
    nombrePost.className = 'autora-post';
    divPosted.className = 'div-posted';
    eliminar.className = 'boton-eliminar';
    editar.className = 'boton-editar';
    fecha.className = 'fecha-post';
    section3.appendChild(nombrePost);
    section3.appendChild(divPosted);
    section3.appendChild(fecha)
    fecha.appendChild(eliminar);
    fecha.appendChild(editar);

    main.appendChild(section1);
    main.appendChild(section2);
    main.appendChild(section3);

    signOut.className = 'sign-out-botton';
    footer.appendChild(signOut);
} 
