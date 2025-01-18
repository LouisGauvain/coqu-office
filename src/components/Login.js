import React, { useState } from "react";
import { loginWithEmail } from "../config/authService";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPasswordLogin, setShowPasswordLogin] = useState(false);
    const [error, setError] = useState("");

    const togglePasswordVisibility = () => {
        setShowPasswordLogin(!showPasswordLogin);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await loginWithEmail(email, password);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2 className="title-form">Connexion</h2>

            {
                error && <p className="alert alert-danger">Votre e-mail et/ou votre mot de passe ne sont pas corrects</p>
            }

            {/* Formulaire de connexion */}
            <form className="form-login">
                <div className="form-floating mb-3">
                    <input
                        id="emailLogin"
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="emailLogin" className="form-label">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        id="passwordLogin"
                        type={showPasswordLogin ? "text" : "password"}
                        className="form-control"
                        placeholder="Mot de passe"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="passwordLogin" className="form-label">Password</label>
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="seePasswordLogin"
                        onChange={togglePasswordVisibility}
                    />
                    <label className="form-check-label" htmlFor="seePasswordLogin">
                        Voir le mot de passe
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleLogin}>Se connecter</button>
            </form>
        </div>
    );
};

export default Login;
