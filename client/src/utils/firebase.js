
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "utsavdemo-b1aac.firebaseapp.com",
  projectId: "utsavdemo-b1aac",
  storageBucket: "utsavdemo-b1aac.firebasestorage.app",
  messagingSenderId: "1095471230697",
  appId: "1:1095471230697:web:8e6987cee2706201690a78"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}