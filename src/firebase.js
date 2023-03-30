import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyA4B30EoTZbWILSd_Kz3lcH6d-QtXMkk0U",
  authDomain: "sumit-portfolio-2330d.firebaseapp.com",
  projectId: "sumit-portfolio-2330d",
  storageBucket: "sumit-portfolio-2330d.appspot.com",
  messagingSenderId: "375635594225",
  appId: "1:375635594225:web:8b04bf673a80b644319250"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();