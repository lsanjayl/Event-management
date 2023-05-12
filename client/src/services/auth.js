import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDiOHshxpaLpmWmrN7rdBZ37xc2B9UR_-w",
  authDomain: "eventsup-f2fe6.firebaseapp.com",
  projectId: "eventsup-f2fe6",
  storageBucket: "eventsup-f2fe6.appspot.com",
  messagingSenderId: "63471824650",
  appId: "1:63471824650:web:62d134be0cd418f6bcd4f3"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;