import React, { useEffect, createContext } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const UserContext = createContext(null);

function UserProvider({ children }) {
    const [user, setUser] = React.useState(null);
    const [accessToken, setAccessToken] = React.useState(null);
    const [refreshToken, setRefreshToken] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [displayName, setDisplayName] = React.useState(null);
    const [photoURL, setPhotoURL] = React.useState(null);
    const [phoneNumber, setPhoneNumber] = React.useState(null);
    const [uid, setUid] = React.useState(null);

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
        <UserContext.Provider value={{ user, setUser, accessToken, refreshToken, email, displayName, photoURL, phoneNumber, uid }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };