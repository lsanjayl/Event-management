import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCW4b9gvHAKEgrzFCWvSQ7RDDS_OvYxyHI",
  authDomain: "event-manager-46daf.firebaseapp.com",
  projectId: "event-manager-46daf",
  storageBucket: "event-manager-46daf.appspot.com",
  messagingSenderId: "610355809655",
  appId: "1:610355809655:web:d5358362c0f7a904cce572"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;