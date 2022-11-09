import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCruB2EjPnWN0TheN04cjg6z9yc0oRj6-I",
  authDomain: "cart-1bb77.firebaseapp.com",
  projectId: "cart-1bb77",
  storageBucket: "cart-1bb77.appspot.com",
  messagingSenderId: "783756768884",
  appId: "1:783756768884:web:3e08f01c6ad9dc0d07c321"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

