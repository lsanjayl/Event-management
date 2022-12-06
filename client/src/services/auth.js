import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwkSOb_x6DD6OzvjzrD8uJpeXuz25h1G0",
  authDomain: "clubsandcells-9e51f.firebaseapp.com",
  projectId: "clubsandcells-9e51f",
  storageBucket: "clubsandcells-9e51f.appspot.com",
  messagingSenderId: "907913581849",
  appId: "1:907913581849:web:7f2a9cb64a1aef94882188",
  measurementId: "G-5NLKE4BVPG"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;