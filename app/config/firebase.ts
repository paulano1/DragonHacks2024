// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBJHRIJqZaEmMW0VGxNk34kWR4qidtz8n4",
  authDomain: "dragonhacks-new.firebaseapp.com",
  projectId: "dragonhacks-new",
  storageBucket: "dragonhacks-new.appspot.com",
  messagingSenderId: "215185242913",
  appId: "1:215185242913:web:1512e29a9bd7148d261c60",
  measurementId: "G-FH1J6Y2K53"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
