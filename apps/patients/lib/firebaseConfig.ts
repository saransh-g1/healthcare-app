// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6PrhiqZcfdNDxZu8f3AALV-DuopLgN1w",
  authDomain: "care-for-health-1858e.firebaseapp.com",
  projectId: "care-for-health-1858e",
  storageBucket: "care-for-health-1858e.appspot.com",
  messagingSenderId: "452127947180",
  appId: "1:452127947180:web:ebf3de471b78812bd0e209",
  measurementId: "G-6GVXPRPRN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage=getStorage(app);
export default storage
const analytics = getAnalytics(app);