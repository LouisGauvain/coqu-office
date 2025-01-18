import React from "react";

import langue from "../assets/pictures/langue.svg";
import close from "../assets/pictures/close.svg";
import coqui from "../assets/pictures/logoCoqui.png";

const Widget = () => {
    return (
        <>
            <div className="container container-configWidget">
                <div className="div_configWidget">
                    <h2>Vue du Widget</h2>
                    <div className="container_widget">
                        <div className="header_widget">
                            <img src={langue} alt="langue" />
                            <img src={coqui} alt="coqui" className="header_widget_logo" />
                            <img src={close} alt="close" />
                        </div>
                        <div className="widget_content">
                            <div className="widget_content_intro">
                                <p>Bienvenue au Coqui - La cabane de plage parisienne.</p>
                                <p>Pour toutes réservations de plus de 6 personnes, contactez-nous
                                    <a href="tel:+330979189043">09 79 18 90 43</a>
                                    À très bientôt !
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Widget;
