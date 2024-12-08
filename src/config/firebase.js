import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA9v3NRiGDOH-qZ7IAF4O51Xn4YY0Epn6o",
    authDomain: "le-coqui.firebaseapp.com",
    projectId: "le-coqui",
    storageBucket: "le-coqui.firebasestorage.app",
    messagingSenderId: "97753944730",
    appId: "1:97753944730:web:30adad1c324a9ef2c60523",
    measurementId: "G-ZPW0P3FPW1",
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Exporter l'authentification
export const auth = getAuth(app);
