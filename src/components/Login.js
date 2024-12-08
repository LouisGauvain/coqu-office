import React, { useState } from "react";
import { loginWithEmail } from "../config/authService";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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
            <h2>Connexion</h2>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Formulaire de connexion */}
            <div className="mb-3">
                <label htmlFor="emailLogin" className="form-label">Email address</label>
                <input
                    id="emailLogin"
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="passwordLogin" className="form-label">Password</label>
                <input
                    id="passwordLogin"
                    type="password"
                    className="form-control"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="seePasswordLogin"></input>
                <label className="form-check-label" htmlFor="seePasswordLogin">Voir le mot de passe</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>Se connecter</button>
        </div>
    );
};

export default Login;
