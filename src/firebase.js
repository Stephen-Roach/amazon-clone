import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA503KzuLBLXQFVWBHcax2TKYfnmztAsC8',
  authDomain: 'clone-a6e5f.firebaseapp.com',
  databaseURL: 'https://clone-a6e5f.firebaseio.com',
  projectId: 'clone-a6e5f',
  storageBucket: 'clone-a6e5f.appspot.com',
  messagingSenderId: '388953641214',
  appId: '1:388953641214:web:4f2f7b15f9c52f8e7b55af',
  measurementId: 'G-C1CSKRKLJE',
});

const auth = firebase.auth();

export { auth };
