import React, { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { logout } from "../config/authService";


import Login from "./Login";

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="container">
            <h1>Home</h1>
            {user ? (
                <div>
                    <h2>Bonjour {user.email}</h2>
                    <button onClick={logout}>Se déconnecter</button>
                </div>
            ) : (
                <Login />
            )}
        </div>
    );
};

export default Home;
