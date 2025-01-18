import React, { useState } from "react";
import { registerWithEmail } from "../config/authService";

const Auth = () => {
    const [emailRegister, setEmailregister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [showPasswordRegister, setShowPasswordRegister] = useState(false);
    const [error, setError] = useState("");

    const togglePasswordVisibility = () => {
        setShowPasswordRegister(!showPasswordRegister);
    };

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
            <h2 className="title-form">Inscription</h2>
            {
                error && <p className="alert alert-danger">Votre e-mail et/ou votre mot de passe ne sont pas corrects</p>
            }
            {/* Formulaire d'inscription */}
            <form className="form-register">
                <div className="form-floating mb-3">
                    <input
                        id="emailRegister"
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        autoComplete="email"
                        value={emailRegister}
                        onChange={(e) => setEmailregister(e.target.value)}
                    />
                    <label htmlFor="emailRegister" className="form-label">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        id="passwordRegister"
                        type={showPasswordRegister ? "text" : "password"}
                        className="form-control"
                        placeholder="Mot de passe"
                        autoComplete="current-password"
                        value={passwordRegister}
                        onChange={(e) => setPasswordRegister(e.target.value)}

                    />
                    <label htmlFor="passwordRegister" className="form-label">Password</label>
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="seePasswordRegister"
                        onChange={togglePasswordVisibility}
                    />
                    <label className="form-check-label" htmlFor="seePasswordRegister">
                        Voir le mot de passe
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleRegister}>S'inscrire</button>
            </form>
        </div>
    );
};

export default Auth;
