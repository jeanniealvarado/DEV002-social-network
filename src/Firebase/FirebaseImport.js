import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup,
  GoogleAuthProvider, getAuth, signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { set, ref } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

export {
  createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup,
  GoogleAuthProvider, getAuth, signInWithEmailAndPassword, set, ref, initializeApp,
};
