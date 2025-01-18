import React from "react";

import Login from "./Login";
import Register from "./Register";

const Auth = () => {
    return (
        <div className="container">
            <h1 className="title-auth">Bienvenue dans votre nouveau Back-Office</h1>
            <div className="row-auth">
                <Login />
                <Register />
            </div>
        </div>
    );
};

export default Auth;
