import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Neonspot from "../images/neonspot.webp";

function Contact() {
    const position = { lat: 50.0755, lng: 14.4378 };

    console.log("Google Maps API Key:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

    return (
        <section id="contact" className="contact-section">
            <div className="contact-left">
                <h3>Kontakt</h3>
                <div className="contact-info">
                    <ol>
                        <li>Lena Lejsková</li>
                        <li>Neon Spot Tattoo Studio</li>
                        <li>Národní třída 50, 695 01, Hodonín</li>
                        <li>tel. +420 777 777 777</li>
                    </ol>
                </div>
                
                <p className="contact-text">Pokud máte zájem o tetování, neváhejte mě kontaktovat pomocí formuláře.</p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Jméno a příjmení</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Vaše jméno a příjmení"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Váš e-mail"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Vaše přání</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Popište své přání"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Odeslat</button>
                </form>
                <p className="form-info">Pro potvrzení termínu je potřeba uhradit zálohu – ta se odečte z ceny tetování.<br />
                    Pokud se nemůžete dostavit, dejte vědět minimálně 4 dny předem, jinak záloha propadá.<br />
                    Záloha je nevratná, ale při včasném zrušení ji můžeme přesunout na nový termín.<br />
                    Platba probíhá převodem – údaje vám pošlu ve zprávě.</p>
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