/**
 * @jest-environment jsdom
 */

import { createUserWithEmailAndPassword, registerFirebase } from '../src/Firebase/FirebaseFunctions.js';
// import { auth } from '../src/main.js';

// jest.mock('../src/main.js', () => ({
//   auth: jest.fn(() => ({ auth: 'TEST ' })),
// }));

jest.mock(../src/Firebase/FirebaseImport.js);

describe('Tests para Register'), () => {
  test('El componente es una función'), () => {
    expect(typeof registerFirebase). toBe('function');
  }
}
// jest.mock('../src/Firebase/FirebaseImport.js', () => ({
//   createUserWithEmailAndPassword: jest.fn((auth, email, password) =>
//     // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa')
//     ({
//       email: 'correo@powerl.com',
//       password: 'password123',
//     })),
// }));

// describe('registerFirebase', () => {
//   const email = 'correo@gmail.com';
//   const password = 'password123';

//   it('debe llamar a createUserWithEmailAndPassword cuando se ejecute', async () => {
//     await registerFirebase(email, password);
//     // expect(createUserWithEmailAndPassword).toHaveBeenCalled(email, password);
//   });
// });
