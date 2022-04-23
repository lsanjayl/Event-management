import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAtIR-KGhBCq1O6Kd_3xxpPQhLnq8XVGgk",
    authDomain: "event-manager-44204.firebaseapp.com",
    projectId: "event-manager-44204",
    storageBucket: "event-manager-44204.appspot.com",
    messagingSenderId: "845040531183",
    appId: "1:845040531183:web:64c8c8a9b4d68a3d900d1a",
    measurementId: "G-CZDS0KZT7H"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const auth=getAuth(app);
export const db=getFirestore(app);
export default app;