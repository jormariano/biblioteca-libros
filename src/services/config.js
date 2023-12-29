// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkWZO1V93D7Dy8z5vths23NE2O_B5N9Qg",
  authDomain: "bookshop2023-95fe1.firebaseapp.com",
  projectId: "bookshop2023-95fe1",
  storageBucket: "bookshop2023-95fe1.appspot.com",
  messagingSenderId: "539526595270",
  appId: "1:539526595270:web:302ff15cd4f4e1ccf64dc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);