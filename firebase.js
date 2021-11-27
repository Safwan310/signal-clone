import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCrdC_fhoo9EWBfCxrnSyf0ed7AU1iK_mI",
    authDomain: "signal-clone-eeff6.firebaseapp.com",
    projectId: "signal-clone-eeff6",
    storageBucket: "signal-clone-eeff6.appspot.com",
    messagingSenderId: "967649052058",
    appId: "1:967649052058:web:b4fc965b3b0d4c5617a623"
  };

let app;

if(app == null){
  app = initializeApp(firebaseConfig);
}
else{
  app = app();
}

const db = getFirestore();
const auth = getAuth();

export { db,auth };