import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

// Fonction pour s'inscrire
export const registerWithEmail = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Utilisateur inscrit :", userCredential.user);
        return userCredential.user;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Fonction pour se connecter
export const loginWithEmail = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Utilisateur connecté :", userCredential.user);
        return userCredential.user;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Fonction pour se déconnecter
export const logout = async () => {
    try {
        await signOut(auth);
        console.log("Déconnexion réussie");
    } catch (error) {
        throw new Error(error.message);
    }
};
