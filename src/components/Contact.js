import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Neonspot from "../images/neonspot.webp";
import Form from "./Form";

function Contact() {
    const position = { lat: 48.855137204263166, lng: 17.12478584421522 };

    console.log("Google Maps API Key:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

    return (
        <section id="contact" className="contact-section">
            <div className="contact-left">
                <h1>Kontakt</h1>
                <div className="contact-info">
                    <ol>
                        <li><strong>Lena Lejsková</strong></li>
                        <li>Neon Spot Tattoo Studio</li>
                        <li>Národní třída 50, 695 01, Hodonín</li>
                        <li>tel. +420 721 437 761</li>
                    </ol>
                </div>

                <p className="contact-text">Pokud máte zájem o tetování, kontaktujte mě pomocí formuláře.</p>
                <Form />
                <p className="form-info">Pro potvrzení termínu je potřeba uhradit zálohu – ta se odečte z ceny tetování.</p>
                <p className="form-info">Pokud se nemůžete dostavit, dejte vědět minimálně 4 dny předem, jinak záloha propadá.</p>
                <p className="form-info">Záloha je nevratná, ale při včasném zrušení ji můžeme přesunout na nový termín.</p>
                <p className="form-info">Platba probíhá převodem – údaje vám pošlu ve zprávě po domluvě.</p>
            </div>
            <div className="contact-right">
                <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                    <GoogleMap
                        mapContainerClassName="google-map"
                        center={position}
                        zoom={15}
                    >
                        <Marker position={position} />
                    </GoogleMap>
                </LoadScript>
                <div className="tattoo-studio">
                    <img src={Neonspot} alt="tattoo-studio"></img>
                </div>
            </div>
        </section>
    );
}

export default Contact;