import React, { useState } from "react";
import { registerWithEmail, loginWithEmail, logout } from "../config/authService";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [emailRegister, setEmailregister] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async () => {
        try {
            await registerWithEmail(emailRegister, password);
            setError("");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleLogin = async () => {
        try {
            await loginWithEmail(email, password);
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

            {/* Formulaire de connexion */}
            <h2>Connexion</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Se connecter</button>

            {/* Déconnexion */}
            <button onClick={logout}>Se déconnecter</button>
        </div>
    );
};

export default Auth;
