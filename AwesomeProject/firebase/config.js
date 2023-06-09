import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZ1AowaGy1DdtuxjKc1HTqoNKkNY4TB9Q",
  authDomain: "reactnativeapp-55378.firebaseapp.com",
  databaseURL:
    "https://reactnativeapp-55378-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactnativeapp-55378",
  storageBucket: "reactnativeapp-55378.appspot.com",
  messagingSenderId: "992796867463",
  appId: "1:992796867463:web:8ad793f51179d3f575f122",
  measurementId: "G-W4Z63K7EK1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
