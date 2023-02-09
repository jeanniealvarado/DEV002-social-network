// import { template } from '../lib/Router.js';
import {
  logOut, publicaciones, onGetPost, deletePost,
}
  from '../Firebase/FirebaseFunctions.js';
import { auth, doc } from '../Firebase/FirebaseImport.js';
import { inicioDeSesion } from './InicioDeSesion.js';
// onGetPost, deletePost, getPost, publicaciones
const main = document.getElementById('main');
const footer = document.getElementById('footer');

export const timeline = () => {
  main.innerHTML = '';
  footer.innerHTML = '';

  const section1 = document.createElement('section');
  const logo = document.createElement('img');
  const holaUsuaria = document.createElement('p');
  const section2 = document.createElement('form');
  const inputPost = document.createElement('textarea');
  const botonPublicar = document.createElement('button');
  const section3 = document.createElement('section');
  const nombrePost = document.createElement('p');

  // const formPost = document.createElement('form');
  const divPosted = document.createElement('div');
  const eliminar = document.createElement('i');
  const editar = document.createElement('i');
  const fecha = document.createElement('p');
  const signOut = document.createElement('i');
  const buttonOut = document.createElement('button');

  section1.className = 'section-head';
  logo.className = 'logo-timeline';
  logo.src = './img/logo-big.png';
  logo.alt = 'logo-powerL';
  holaUsuaria.className = 'hola-Usuaria';
  eliminar.className = 'fa-solid fa-trash-can';
  editar.className = 'fa-regular fa-pen-to-square';
  signOut.className = 'fa-solid fa-arrow-right-from-bracket signOut-icon';
  section1.appendChild(logo);
  section1.appendChild(holaUsuaria);

  section2.className = 'section-posting';
  inputPost.className = 'input-post';
  inputPost.id = 'postear';
  inputPost.placeholder = '¡Hola mundo!';
  inputPost.cols = '50';
  inputPost.rows = '4';
  inputPost.resize = 'none';
  botonPublicar.className = 'boton-enviar';
  botonPublicar.id = 'publicar';
  botonPublicar.innerText = 'Publicar';
  botonPublicar.type = 'submit';

  section2.appendChild(inputPost);
  section2.appendChild(botonPublicar);

  section3.className = 'section-timeline';
  nombrePost.className = 'autora-post';
  divPosted.className = 'div-posted';
  divPosted.id = 'divPosted';
  eliminar.className = 'boton-eliminar';
  editar.className = 'boton-editar';
  fecha.className = 'fecha-post';
  section3.appendChild(nombrePost);
  section3.appendChild(divPosted);
  section3.appendChild(fecha);
  fecha.appendChild(eliminar);
  fecha.appendChild(editar);

  main.appendChild(section1);
  main.appendChild(section2);
  main.appendChild(section3);
  buttonOut.id = 'userSignOut';
  buttonOut.className = 'signOut-button';
  footer.appendChild(buttonOut);
  buttonOut.appendChild(signOut);
  const postedDiv = document.getElementById('divPosted');

  const arrayPost = [];

  const postPublisher = async () => {
    //const querySnapshot = await getAllPosts();
    onGetPost((querySnapshot) => {
      let html = '';

      querySnapshot.forEach((doc) => {
        const postData = doc.data();
        html += `
         <div>
            <p>${postData.createdDateTime}</p>
            <p>${postData.post}</p>
            <button class='btn-delete' data-id='${doc.id}'>Delete</button>
         </div>
       `;
      });
      postedDiv.innerHTML = html;
      const btnsDelete = postedDiv.querySelectorAll('.btn-delete');
      btnsDelete.forEach(btn => {
        btn.addEventListener('click', ({target: { dataset }}) => {
          deletePost(dataset.id);
        })
      })
    });
  };
  //                  TEMPLATE TIMELINE
  const postear = document.getElementById('postear');
  const publicar = document.getElementById('publicar');
  const userLogout = document.getElementById('userSignOut');
  // const sectionPostear = document.querySelector('section-posting');
  publicar.addEventListener('click', async () => {
    console.log(postear.value);
    await publicaciones(postear.value);
    await postPublisher();
  });
  //       FUNCIÓN LOGOUT
  console.log('Función Logout');
  userLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logOut(auth);
    return inicioDeSesion();
  });

  // let editStatus = false;
  // let id = '';
  // const postData = doc.data();
  // publicaciones();

  // publicar.addEventListener('click', async (e) => {
  //   e.preventDefault();
  //   onGetPost((querySnapshot) => {
  //     let html = '';

  //     querySnapshot.forEach((doc) => {
  //       html += `
  //     <div>
  //     <h3>${postData.description}</p>
  //     <button class='btn-delete' data-id='${doc.id}'>Delete</button>
  //     <button class='btn-edit' data-id='${doc.id}'>Edit</button>
  //     </div>
  //     `;
  //     });

  //     sectionPostear.innerHTML = html;

  //     const btnsDelete = sectionPostear.querySelectorAll('.btn-delete');
  //     btnsDelete.forEach((btn) => {
  //       btn.addEventListener('click', ({ target: { dataset } }) => {
  //         deletePost(dataset.id);
  //       });
  //     });

  //     const btnsEdit = sectionPostear.querySelectorAll('.btn-edit');
  //     btnsEdit.forEach((btn) => {
  //       btn.addEventListener('click', async (e) => {
  //         try {
  //           const doc = await getPost(e.target.dataset.id);
  //           const postDataEdit = doc.data();
  //           const postear = document.getElementById('postear').value;

  //           editStatus = true;
  //           id = doc.id;

  //           postear['btn-task-form'].innerText = 'Update';
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       });
  //     });

  //     //   try {
  //     //     const post = document.getElementById('postear').value;
  //     //     await addPost(post);
  //     //     console.log(post);
  //     //     publicaciones(post, db);
  //     //     sectionPostear.reset();
  //     //   } catch (error) {
  //     //     console.log(error);
  //     //   }
  //     // });
  //     // const postFilter = doc.id === user;
  //     // if (postFilter) {
  //     //   namePost
  //     // }
  //   });

  // });
  // });
};
