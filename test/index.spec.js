/**
 * @jest-environment jsdom
 */

import { async } from 'regenerator-runtime';
import {
  registerFirebase, login, registerGoogle, getAllPosts, logOut,
} from '../src/Firebase/FirebaseFunctions.js';
import {
  getDocs,
  provider, sendEmailVerification, signInWithEmailAndPassword,
  signInWithPopup, doc, signOut, auth, Timestamp,
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
  db: () => null,
  // auth:{currentUser:{}},
  auth: jest.fn(() => ({ auth: 'TEST ' })),
  provider: jest.fn(() => ({ provider: 'TEST ' })),
  signInWithEmailAndPassword: jest.fn((email, password) => {
    if (!email || !password) {
      throw new Error('ERROR');
    }
    return Promise.resolve({ user: 'admin' });
  }),
  signInWithPopup: jest.fn(),
  getDocs: jest.fn(() => ({ docs: 'TEST' })),
  signOut: jest.fn((auth) => {
    if (!auth) {
      throw new Error('ERROR');
    }
    return Promise.resolve({});
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

describe('test para acceder con google', () => {
  it('la funcion llama a signInWithPopup', async () => {
    await registerGoogle(provider);
    expect(signInWithPopup).toHaveBeenCalled();
  });
});

describe('test para mostrar los posts', () => {
  it('la función llama a getDocs', async () => {
    await getAllPosts();
    expect(getDocs).toHaveBeenCalled();
  });
  // it('la función muestra la fecha en el formato esperado', async () => {
  //   await 
  // });
  it('la función devuelve una matriz de posts', async () => {
    const posts = await getAllPosts();
    expect(Array.isArray(posts)).toBe(true);
  });
});

describe('test para cerrar sesión', () => {
  it('la función debe llamar a auth', async () => {
    await logOut();
    expect(signOut).toHaveBeenCalled();
  });
  // it('la función debe lanzar un error', async () => {
  //   await expect(logOut()).rejects.toThrow('ERROR');
  // });
});
