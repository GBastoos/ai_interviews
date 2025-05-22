import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfwDdmrgGx8YRHROD5zqRZRN2iyxOp7yE",
  authDomain: "prepwise-7b2b5.firebaseapp.com",
  projectId: "prepwise-7b2b5",
  storageBucket: "prepwise-7b2b5.firebasestorage.app",
  messagingSenderId: "76686410826",
  appId: "1:76686410826:web:62b2121d4d8331dd2b52b3",
  measurementId: "G-N11S835819",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
