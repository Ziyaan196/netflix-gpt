// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqSye_hjD4cvhIiCbxEf1djrszitaBwGU",
  authDomain: "netflixgpt-6d8cd.firebaseapp.com",
  projectId: "netflixgpt-6d8cd",
  storageBucket: "netflixgpt-6d8cd.firebasestorage.app",
  messagingSenderId: "862528592578",
  appId: "1:862528592578:web:c6dfbd9c26f7a493bdf95b",
  measurementId: "G-0VH0F2DTG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();
