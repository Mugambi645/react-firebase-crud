// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3dR6wBBlSrTf5D6UW_-iE6geLgl0vaF4",
  authDomain: "fir-tutorial-b9b8b.firebaseapp.com",
  projectId: "fir-tutorial-b9b8b",
  storageBucket: "fir-tutorial-b9b8b.appspot.com",
  messagingSenderId: "1027749648442",
  appId: "1:1027749648442:web:da944058dce4249368bd03",
  measurementId: "G-NZR9CYX64T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
