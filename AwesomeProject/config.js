import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAue25uaNrKYV3rhBgjLolviWZSoCWUuE",
  authDomain: "react-native-goit-389012.firebaseapp.com",
  databaseURL: "https://react-native-goit-389012-default-rtdb.firebaseio.com",
  projectId: "react-native-goit-389012",
  storageBucket: "react-native-goit-389012.appspot.com",
  messagingSenderId: "1047525453649",
  appId: "1:1047525453649:web:990706dc89ea5cc2316d70",
  measurementId: "G-YTDNYJV3FC",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
