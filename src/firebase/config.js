// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBd6pdiGyM_J_gxbnxOmH-hjXdl4PN8d2U",
    authDomain: "heyandesapp-27cf6.firebaseapp.com",
    projectId: "heyandesapp-27cf6",
    storageBucket: "heyandesapp-27cf6.appspot.com",
    messagingSenderId: "492104112947",
    appId: "1:492104112947:web:b14f849e6305e3f71cbc46"
  };

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp);

