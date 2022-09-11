// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCtxjlS4jbqS967kBeEIJfId318Xs8gunY',
  authDomain: 'e-chosen.firebaseapp.com',
  projectId: 'e-chosen',
  storageBucket: 'e-chosen.appspot.com',
  messagingSenderId: '663121350855',
  appId: '1:663121350855:web:e932221361d6a7e7632ee2',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
