// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // process.env.NEXT_PUBLIC_FIREBASE_API_KEY
  apiKey: "AIzaSyAGm5-Ih8Zts9dQiitV61FNB2dnZqLTwjo",
  authDomain: "azeem-nana.firebaseapp.com",
  projectId: "azeem-nana",
  storageBucket: "azeem-nana.appspot.com",
  messagingSenderId: "918908909068",
  appId: "1:918908909068:web:dd9bae0f152d44e7a9e029",
};

export default function initFirebase() {
  initializeApp(firebaseConfig);
  console.log("initialized firebase");
}
// if (!firebase.apps?.length) {

// }

// Initialize Firebase
// const firebaseapp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const auth = getAuth();

// export { getAuth, RecaptchaVerifier, signInWithPhoneNumber };
