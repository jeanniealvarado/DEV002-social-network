import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';

import {
  createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup,
  GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signOut, updateProfile,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

import { set, ref } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

import {
  getFirestore, collection, addDoc, getDoc, getDocs, onSnapshot, deleteDoc,
  updateDoc, doc, Timestamp,
}
  from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

import firebaseConfig from '../Firebase/ConfigFirebase.js';

export {
  createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup,
  GoogleAuthProvider, getAuth, signInWithEmailAndPassword, set, ref, initializeApp, collection,
  getFirestore, addDoc, signOut, updateProfile, onAuthStateChanged, getDoc, onSnapshot, getDocs,
  deleteDoc, updateDoc, doc, Timestamp,
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const provider = new GoogleAuthProvider();
