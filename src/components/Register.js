import React, { useState } from "react";
import { registerWithEmail } from "../config/authService";

const Auth = () => {
    const [emailRegister, setEmailregister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async () => {
        try {
            await registerWithEmail(emailRegister, passwordRegister);
            setError("");
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <div>
            <h1>Authentification</h1>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Formulaire d'inscription */}
            <h2>Inscription</h2>
            <input
                type="email"
                placeholder="Email"
                value={emailRegister}
                onChange={(e) => setEmailregister(e.target.value)}
            />
            <input
                type="password"
                placeholder="Mot de passe"
                value={passwordRegister}
                onChange={(e) => setPasswordRegister(e.target.value)}
            />
            <button onClick={handleRegister}>S'inscrire</button>
        </div>
    );
};

export default Auth;
