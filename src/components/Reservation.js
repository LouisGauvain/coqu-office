import React from "react";

const Reservation = () => {

    return (
        <>
            <div className="container container-reservation">
                <div className="div_reservation">
                    <h2>Vos Réservation</h2>
                    <table className="table_reservation">
                        <thead className="th">
                            <tr>
                                <th scope="col" className="thead_name">Nom</th>
                                <th scope="col" className="thead_mail">E-mail</th>
                                <th scope="col" className="thead_phone">Téléphone</th>
                                <th scope="col" className="thead_perso">Nb Personnes</th>
                                <th scope="col" className="thead_date">Date</th>
                                <th scope="col" className="thead_heure">Heure</th>
                                <th scope="col" className="thead_message">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td></td>
                                <td></td>
                                <td>4</td>
                                <td>2021-09-30</td>
                                <td>12:00</td>
                                <td>lorem ipsum deded dedededed dedededed dedededed</td>
                            </tr>
                            <tr>
                                <td>Jane Doe</td>
                                <td></td>
                                <td></td>
                                <td>2</td>
                                <td>2021-09-30</td>
                                <td>12:30</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Reservation;
