import { registerFirebase } from '../src/Firebase/FirebaseFunctions.js';
import { auth } from '../src/main.js';

jest.mock('../src/Firebase/FirebaseFunctions.js');

<<<<<<< HEAD
// describe('registerFirebase', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

// describe('registerFirebase', () => {
//   let email = 'correo@gmail.com';
//   //let password = 'notarealpassword';
//   let passwordVacio = '';
//   //let emailVacio = '';

//   it('debe mostrar un mensaje de error cuando no se entregue un mail como argumento', () => {
//     expect(registerFirebase(auth, email, passwordVacio).toThrowError(TypeError))
//   })

// })
=======
describe('registerFirebase', () => {
  it('debe retornar un objeto', () => {
    const email = 'correo@gmail.com';
    const password = 'password123';
    // auth = getAuth();
    expect(typeof registerFirebase(auth, email, password)).toBe('object');
  });
});
>>>>>>> df21a18482bf23e1d1c3cf3b8d075a8f2a46baa8
