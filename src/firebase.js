// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7jvqVUYTdicxlcGb0aMcsWS94-VaTJO0",
  authDomain: "eccomerce-76520.firebaseapp.com",
  projectId: "eccomerce-76520",
  storageBucket: "eccomerce-76520.appspot.com",
  messagingSenderId: "808985150394",
  appId: "1:808985150394:web:cf8b87a32e054d3a855383",
  measurementId: "G-MLLL5Y7JW1",
};


const app = initializeApp(firebaseConfig);
/* estamos exportando la autenticacion que nos da firebase */
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


export const getData = async () => {
  const res = await getDocs(collection(db, "restaurantes"));

  return res;
};