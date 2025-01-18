import React, { useState, useEffect } from "react";
import { logout } from "../config/authService";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

import LogoCoqui from "../assets/pictures/logoCoqui.png";

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);


    return (
        <>
            <header className="div_header">
                <div className="container">
                    <div className="headerLogo">
                        <img src={LogoCoqui} alt="Logo" className="Logo" />
                        <h4>Le Coqu-Office</h4>
                    </div>
                    {user ? (
                        <>
                            <div className="btn-group dropup">
                                <div className="select-user">
                                    <button
                                        className="btn dropdown"
                                        onClick={() => setShowDropdown((prev) => !prev)}
                                    >
                                        <img src={LogoCoqui} alt="" width="32" height="32" className="rounded-circle me-2" />
                                        Louis Gauvain
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            style={{ transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                                        >
                                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#77757F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                                {showDropdown && (
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li><a className="dropdown-item" href="#">Profil</a></li>
                                            <li><a className="dropdown-item" href="#">Paramètre</a></li>
                                            <li><a className="dropdown-item" onClick={logout}>Se déconnecter</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : null}
                </div>
            </header>
        </>
    );
};

export default Header;
