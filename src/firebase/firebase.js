import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcNY7j3FFwN2bNWV8pr4ttQmCQWZsDeQ0",
  authDomain: "skillfactory-3e03c.firebaseapp.com",
  projectId: "skillfactory-3e03c",
  storageBucket: "skillfactory-3e03c.appspot.com",
  messagingSenderId: "637375015787",
  appId: "1:637375015787:web:15786ffab43f770df8fa2e",
  measurementId: "G-0N028YVV4D",
};

const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default firebaseApp;
