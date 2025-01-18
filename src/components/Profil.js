import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Profil = () => {
    const { user, updateUserProfile } = useContext(UserContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [userElem, setUserElem] = useState({
        uid: user?.uid || '',
        displayName: user?.displayName || '',
        phoneNumber: user?.phoneNumber || '',
        email: user?.email || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserElem((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleConfirme = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');
        try {
            await updateUserProfile(user.uid, {
                displayName: userElem.displayName,
                phoneNumber: userElem.phoneNumber,
                email: userElem.email,
            });
            setSuccess("Profil mis à jour avec succès.");
        } catch (error) {
            console.error("Erreur lors de la mise à jour :", error.response?.data?.error || error);
            setError("Erreur lors de la mise à jour du profil.");
        }
    };

    const formatPhoneNumber = (phoneNumber) => {
        if (!phoneNumber) return '';
        let formatted = phoneNumber.replace(/^\+33/, '0');
        formatted = formatted.replace(/(\d{2})(?=\d)/g, '$1 ');
        if (formatted === '00 00 00 00 00') {
            formatted = '';
        }
        return formatted.trim();
    };

    return (
        <>
            <div className="container container-profil">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Profil</h1>
                        {error && <div className="alert alert-danger">{error}</div>}
                        {success && <div className="alert alert-success">{success}</div>}
                        <form className="form-login" onSubmit={handleConfirme}>
                            <div className="form-floating mb-3">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                    autoComplete="email"
                                    value={userElem.email || ''}
                                    onChange={handleChange}
                                />
                                <label htmlFor="email" className="form-label">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    name="displayName"
                                    type="text"
                                    placeholder="Username"
                                    className="form-control"
                                    autoComplete="name"
                                    value={userElem.displayName || ''}
                                    onChange={handleChange}
                                />
                                <label className="form-label">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Numéro de téléphone"
                                    className="form-control"
                                    value={formatPhoneNumber(userElem.phoneNumber || '')}
                                    onChange={handleChange}
                                />
                                <label className="form-label">Numéro de téléphone </label>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Modifier le profil
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profil;
