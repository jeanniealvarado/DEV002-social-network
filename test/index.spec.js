/**
 * @jest-environment jsdom
 */

import { registerFirebase, login } from '../src/Firebase/FirebaseFunctions.js';
import { sendEmailVerification, signInWithEmailAndPassword } from '../src/Firebase/FirebaseImport.js';
// import { auth } from '../src/main.js';

// jest.mock('../src/main.js', () => ({
//   auth: jest.fn(() => ({ auth: 'TEST ' })),
// }));

jest.mock('../src/Firebase/FirebaseImport.js', () => ({
  createUserWithEmailAndPassword: () => Promise.resolve({ user: {} }),
  sendEmailVerification: jest.fn(),
  query: () => null,
  collection: () => null,
  orderBy: () => null,
  // auth:{currentUser:{}},
  auth: jest.fn(() => ({ auth: 'TEST ' })),
  signInWithEmailAndPassword: jest.fn((auth, email, password) => {
    if (!email || !password) {
      throw new Error('ERROR');
    }
    Promise.resolve({ user: 'admin' });
  }),
}));

describe('Tests para Register', () => {
  it('test', async () => {
    registerFirebase();
    // await new Promise(resolve => setTimeout(resolve,0))
    await new Promise(process.nextTick);
    expect(sendEmailVerification).toHaveBeenCalled();
  });
});

describe('Test para inicio sesion de usuario', () => {
  const email = 'admin@test.com';
  const password = 'admin123';

  it('la funcion llama a signInWithEmailAndPassword', async () => {
    await login(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
});
//     expect(typeof registerFirebase). toBe('function');
//   }
// }
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
