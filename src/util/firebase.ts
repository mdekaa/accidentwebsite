// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHd1giF_RccQAyh3rBk9kv0_IEgZJLWnw",
  authDomain: "moodofnits-election.firebaseapp.com",
  projectId: "moodofnits-election",
  storageBucket: "moodofnits-election.appspot.com",
  messagingSenderId: "761285060277",
  appId: "1:761285060277:web:43e76cfdcf8c45745380fc",
  measurementId: "G-R5K9K7F3EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }