import React, { useContext, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { UserContext } from "../context/UserContext";

async function updateUserProfile(uid, updatedData) {
    try {
        const userRef = doc(db, "users", uid);
        await updateDoc(userRef, updatedData);
    } catch (error) {
        console.error("Erreur lors de la mise à jour :", error.message, error.code);
    }
}

const Profil = () => {
    const { email, displayName, phoneNumber, uid } = useContext(UserContext);

    // updateUserProfile(uid, { displayName: "Test" });

    const [formData, setFormData] = useState({
        email: email || "",
        displayName: displayName || "",
        phoneNumber: phoneNumber || "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile(uid, formData);
        } catch (error) {
            console.error("Erreur lors de la mise à jour du profil :", error);
            console.error("Erreur Firestore :", error.message, error.code);
        }
    };

    return (
        <>
            <div className="container container-profil">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Profil</h1>
                        <form className="form-login" onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label htmlFor="email" className="form-label">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    id="displayName"
                                    type="text"
                                    placeholder="Username"
                                    className="form-control"
                                    autoComplete="name"
                                    value={formData.displayName}
                                    onChange={handleChange}
                                />
                                <label htmlFor="displayName" className="form-label">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    id="phoneNumber"
                                    type="number"
                                    placeholder="Numéro de téléphone"
                                    className="form-control"
                                    autoComplete="number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                                <label htmlFor="phoneNumber" className="form-label">Numéro de téléphone </label>
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
