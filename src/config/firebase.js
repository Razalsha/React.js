
// Import the necessary Firebase modules
// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { getFirestore } from "firebase/firestore";  // Firestore for storing data
// import { getStorage } from 'firebase/storage';

// Your Firebase configuration (replace with your actual config from Firebase Console)
// const firebaseConfig = {
//   apiKey: "AIzaSyCPFrzccZZqA6NhL1cI8FUdLEuUBi1k5Hk",
//   authDomain: "project-3-30453.firebaseapp.com",
//   projectId: "project-3-30453",
//   storageBucket: "project-3-30453.appspot.com",
//   messagingSenderId: "672809562310",
//   appId: "1:672809562310:web:f7ac8ebaa644555ea2a7c7"
//   //measurementId: "G-364PPS2S08"
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider, signInWithPopup };
// const db = getFirestore(app);  
// const storage = getStorage(app);  
// export { auth, provider, db, storage };

// Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Firestore for storing data
import { getStorage } from "firebase/storage";  // Storage for image upload

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPFrzccZZqA6NhL1cI8FUdLEuUBi1k5Hk",
  authDomain: "project-3-30453.firebaseapp.com",
  projectId: "project-3-30453",
  storageBucket: "project-3-30453.appspot.com",
  messagingSenderId: "672809562310",
  appId: "1:672809562310:web:f7ac8ebaa644555ea2a7c7",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);  // Firestore instance
const storage = getStorage(app);  // Storage instance

export { auth, provider, db, storage };
