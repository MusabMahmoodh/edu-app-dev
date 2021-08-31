// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

//CRUD
export const fetchUsers = async (id) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  console.log("fetching");
  if (docSnap.exists()) {
    console.log("fetching", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    return null;
  }
};

export const createUser = async (data) => {
  try {
    const userRef = collection(db, "users");

    const newUser = await setDoc(doc(userRef, data.uid), {
      name: data.name,
    });

    return true;
  } catch (error) {
    return error.message;
  }
};
export const fetchElements = async (element) => {};
export const createElement = async (element) => {};
export const updateElement = async (element) => {};
export const deleteElement = async (element) => {};
