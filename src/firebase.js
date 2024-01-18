import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC_K0I6-z5Vk4vNj3O5RF6wHejywr56Rug",
    authDomain: "chat-app-76af9.firebaseapp.com",
    projectId: "chat-app-76af9",
    storageBucket: "chat-app-76af9.appspot.com",
    messagingSenderId: "518004461959",
    appId: "1:518004461959:web:1a31a87e1424b4f9948322",
    measurementId: "G-CRQQQ7EXMD"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage = getStorage();
export const db=getFirestore()
