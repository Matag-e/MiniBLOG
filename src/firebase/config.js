import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

require('dotenv').config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "miniblog-f7949.firebaseapp.com",
  projectId: "miniblog-f7949",
  storageBucket: "miniblog-f7949.appspot.com",
  messagingSenderId: "450210001715",
  appId: "1:450210001715:web:7266e7c52e8b398c02c446"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}