// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLqY4A5tplT2SofLltmIIoIMhQL2rDdXs",
    authDomain: "realtor-app-423bc.firebaseapp.com",
    projectId: "realtor-app-423bc",
    storageBucket: "realtor-app-423bc.appspot.com",
    messagingSenderId: "639678017900",
    appId: "1:639678017900:web:e0cee807c8045f73874349"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const db = getFirestore();