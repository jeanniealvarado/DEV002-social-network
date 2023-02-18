/**
 * @jest-environment jsdom
 */

import { registerFirebase, login, registerGoogle } from '../src/Firebase/FirebaseFunctions.js';
import {
  provider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup,
} from '../src/Firebase/FirebaseImport.js';
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
  provider: jest.fn(() => ({ provider: 'TEST ' })),
  signInWithEmailAndPassword: jest.fn((auth, email, password) => {
    if (!email || !password) {
      throw new Error('ERROR');
    }
    Promise.resolve({ user: 'admin' });
  }),
  signInWithPopup: jest.fn(),
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

<<<<<<< HEAD
//   it('debe llamar a createUserWithEmailAndPassword cuando se ejecute', async () => {
//     await registerFirebase(email, password);
//     // expect(createUserWithEmailAndPassword).toHaveBeenCalled(email, password);
//   });
// });
// TESTEAR; login, registerGoogle, publicaciones, addDoc, 
=======
describe('test para acceder con google', () => {
  it('la funcion llama a signInWithPopup', async () => {
    await registerGoogle(provider);
    expect(signInWithPopup).toHaveBeenCalled();
  });
});
>>>>>>> f6a591b0fcdb3997457a73156d94f3865a64970d
