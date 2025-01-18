import React, { useEffect, createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import axios from 'axios';
const appBackendUrl = process.env.REACT_APP_API_BACKEND_URL;

const UserContext = createContext(null);

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [email, setEmail] = useState(null);
    const [displayName, setDisplayName] = useState(null);
    const [photoURL, setPhotoURL] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [uid, setUid] = useState(null);
    const [userDetails, setUserDetails] = useState(null);

    const updateUserProfile = async (uid, { displayName, phoneNumber, email }) => {
        try {
            const cleanedPhoneNumber = phoneNumber.startsWith("+33") ? "0" + phoneNumber.slice(3) : phoneNumber;
            const updateResponse = await axios.put(appBackendUrl + '/update-user', {
                uid,
                email,
                displayName,
                cleanedPhoneNumber,
            });

            if (updateResponse.status === 200) {
                setUserDetails((prev) => ({
                    ...prev,
                    displayName,
                    email,
                    phoneNumber: cleanedPhoneNumber || phoneNumber || '',
                }));

            } else {
                throw new Error("Erreur lors de la mise à jour du profil.");
            }
        } catch (error) {
            console.error("Erreur lors de la mise à jour du profil :", error);
            throw error;
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                setAccessToken(currentUser.accessToken);
                setRefreshToken(currentUser.refreshToken);
                setEmail(currentUser.providerData[0].email);
                setDisplayName(currentUser.providerData[0].displayName);
                setPhotoURL(currentUser.providerData[0].photoURL);
                setPhoneNumber(currentUser.providerData[0].phoneNumber);
                setUid(currentUser.providerData[0].uid);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, accessToken, refreshToken, email, displayName, photoURL, phoneNumber, uid, updateUserProfile, userDetails }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };