import React from "react";

import NbPersonne from "./ConfigWidget/Personne";
import Date from "./ConfigWidget/Date";
import Heure from "./ConfigWidget/Heure";

const ConfigWidget = () => {
    return (
        <>
            <div className="container container-configWidget">
                <NbPersonne />
                <Heure />
                <Date />
            </div>
        </>
    );
};

export default ConfigWidget;
