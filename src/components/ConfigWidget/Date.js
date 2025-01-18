import React, { useState } from "react";

const Date = () => {
    return (
        <>
            <div className="div_configWidget">
                <h2>Date</h2>
                <div className="input-group mb-3">
                    <span className="input-group-text">Min</span>
                    <input
                        id="nbPersoMin"
                        type="number"
                        className="form-control"
                        placeholder="Nombre de personne minimum"
                    />
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        id="btnNbPersoMin"
                    >
                        Valider
                    </button>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Max</span>
                    <input
                        id="nbPersoMax"
                        type="number"
                        className="form-control"
                        placeholder="Nombre de personne maximum"
                    />
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        id="btnNbPersoMax"
                    >
                        Valider
                    </button>
                </div>
            </div>
        </>
    );
}

export default Date;