import { registerFirebase } from '../src/Firebase/FirebaseFunctions.js';
import { auth } from '../src/main.js';

jest.mock('../src/Firebase/FirebaseFunctions.js');

describe('registerFirebase', () => {
  it('debe retornar un objeto', () => {
    const email = 'correo@gmail.com';
    const password = 'password123';
    // auth = getAuth();
    expect(typeof registerFirebase(auth, email, password)).toBe('object');
  });
});
