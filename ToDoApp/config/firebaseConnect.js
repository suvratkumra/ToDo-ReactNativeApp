
// adding the firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAGDBkX7nHwwISDRssAmfe4T2Z75A6A3l4",
    authDomain: "todoapp-6aed4.firebaseapp.com",
    projectId: "todoapp-6aed4",
    storageBucket: "todoapp-6aed4.appspot.com",
    messagingSenderId: "980803811688",
    appId: "1:980803811688:web:925be0959ed4f179b4fedd",
    measurementId: "G-DTJMKGZY15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// const addData = async () => {
//     try {
//         const docRef = await addDoc(collection(db, "users"), {
//             first: "Ada",
//             last: "Lovelace",
//             born: 1815
//         });
//         console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// }
// addData();