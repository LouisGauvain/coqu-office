import React, { useState } from "react";

const NbPersonne = () => {
    const [minValue, setMinValue] = useState(1);
    const [maxValue, setMaxValue] = useState(minValue + 1);

    const handleMinChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        setMinValue(newValue);
    };

    const handleMaxChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        setMaxValue(newValue);
    };

    return (
        <>
            <div className="div_configWidget">
                <h2>Nombres de Personnes</h2>
                <div className="input-group mb-3">
                    <span className="input-group-text">Min</span>
                    <input
                        id="nbPersoMin"
                        type="number"
                        className="form-control"
                        placeholder="Nombre de personne minimum"
                        value={minValue}
                        min={1}
                        onChange={handleMinChange}
                    />
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        id="btnNbPersoMin"
                        disabled={minValue < 1}
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
                        value={maxValue}
                        min={minValue}
                        onChange={handleMaxChange}
                    />
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        id="btnNbPersoMax"
                        disabled={maxValue < minValue}
                    >
                        Valider
                    </button>
                </div>
            </div>
        </>
    );
};

export default NbPersonne;
