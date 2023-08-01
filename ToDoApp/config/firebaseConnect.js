
// adding the firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
    FIREBASE_APIKEY, FIREBASE_AUTHDOMAIN,
    FIREBASE_PROJECTID, FIREBASE_STORAGEBUCKET,
    FIREBASE_MESSAGINGSENDERID, FIREBASE_APPID,
    FIREBASE_MEASUREMENTID
} from '@env'

const firebaseConfig = {
    apiKey: FIREBASE_APIKEY,
    authDomain: FIREBASE_AUTHDOMAIN,
    projectId: FIREBASE_PROJECTID,
    storageBucket: FIREBASE_STORAGEBUCKET,
    messagingSenderId: FIREBASE_MESSAGINGSENDERID,
    appId: FIREBASE_APPID,
    measurementId: FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);