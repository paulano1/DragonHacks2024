// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD8CcQn8FouLkRa66Seu3oNCGfZE-Sq-Sg",
  authDomain: "dragonhacks-c1b2f.firebaseapp.com",
  projectId: "dragonhacks-c1b2f",
  storageBucket: "dragonhacks-c1b2f.appspot.com",
  messagingSenderId: "891440515076",
  appId: "1:891440515076:web:5db5e9a4c8a3adf1ed0d51"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
