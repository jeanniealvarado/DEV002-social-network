/**
 * @jest-environment jsdom
 */

import { registerFirebase } from '../src/Firebase/FirebaseFunctions.js';
import { sendEmailVerification} from '../src/Firebase/FirebaseImport.js'
// import { auth } from '../src/main.js';

// jest.mock('../src/main.js', () => ({
//   auth: jest.fn(() => ({ auth: 'TEST ' })),
// }));

jest.mock('../src/Firebase/FirebaseImport.js', () => ({
  createUserWithEmailAndPassword: () => Promise.resolve({user:{}}),
  sendEmailVerification: jest.fn(),
  query: () => null,
  collection: () => null,
  orderBy: () => null,
  auth:{currentUser:{}}
}));

describe('Tests para Register', () => {
   it("test", async () => {
    registerFirebase()
    //await new Promise(resolve => setTimeout(resolve,0))
    await new Promise(process.nextTick);
    expect(sendEmailVerification).toHaveBeenCalled()

   }) 
})
//   test('El componente es una función'), () => {
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
