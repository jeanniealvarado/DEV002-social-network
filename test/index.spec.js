// importamos la funcion que vamos a testear
import { registerFirebase } from '../src/Firebase/FirebaseFunctions';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });



// describe('registerFirebase', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });


describe('registerFirebase', () => {
  let email = 'correo@gmail.com';
  //let password = 'notarealpassword';
  let passwordVacio = '';
  //let emailVacio = '';

  it('debe mostrar un mensaje de error cuando no se entregue un mail como argumento', () => {
    expect(registerFirebase(auth, email, passwordVacio).toThrowError(TypeError))
  })

})
