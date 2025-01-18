import React, { useState } from "react";

const Heure = () => {
    const [time, setTime] = useState('10:00');
    const [stepValue, setStepValue] = useState('');

    const handleInputStepTime = (e) => {
        const inputValue = e.target.value;
        setStepValue(inputValue);
    };

    const handleTimeChange = (newTime) => {
        setTime(newTime);
    };
    return (
        <>
            <div className="div_configWidget">
                <h2>Heure</h2>
                <div className="input-group mb-3">
                    <span className="input-group-text">Min de réservation</span>
                    <input
                        id="minReserv"
                        type="time"
                        className="form-control"
                        placeholder="Nombre de personne minimum"
                    />
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        id="btnMinReserv"
                    >
                        Valider
                    </button>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Max de réservation</span>
                    <input
                        id="maxReserv"
                        type="time"
                        className="form-control"
                        placeholder="Nombre de personne maximum"
                    />
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        id="btnMaxReserv"
                    >
                        Valider
                    </button>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Heure limite de réservation pour le jour même</span>
                    <input
                        id="maxReservDay"
                        type="time"
                        className="form-control"
                        placeholder="Nombre de personne minimum"
                        value={time}
                        onChange={handleTimeChange}
                        step={900}
                    />
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        id="btnMaxReservDay"
                    >
                        Valider
                    </button>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Step entre chaque réservations ( en min ) </span>
                    <input
                        id="stepTime"
                        type="number"
                        className="form-control"
                        placeholder="Temps entre chaque créneau de réservation"
                        value={stepValue}
                        onChange={handleInputStepTime}
                    />
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        id="btnStepTime"
                    >
                        Valider
                    </button>

                </div>
            </div>
        </>
    )
};

export default Heure;