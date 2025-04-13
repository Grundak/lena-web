import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Contact() {
    const position = { lat: 50.0755, lng: 14.4378 };

    return (
        <section id="kontakt" className="contact-section">
            <div className="contact-left">
                <h3>Kontakt</h3>
                <div className="contact-info">
                    <ol>
                        <li>Lenka Lejsková</li>
                        <li>Neon Spot Tattoo Studio</li>
                        <li>Hodonín 1234</li>
                        <li>tel. +420 777 777 777</li>
                    </ol>
                </div>
                <div className="tatoo-studio">
                    <img src="" alt="tattoo-studio"></img>
                </div>
                <div className="contact-icons">
                    <i className="fas fa-phone"></i>
                    <i className="fas fa-envelope"></i>
                    <i className="fas fa-map-marker-alt"></i>
                </div>
            </div>
            <div className="contact-right">
                <LoadScript googleMapsApiKey="AIzaSyDUIQXoezvACbVjiuCwz1Rr4YXThy3SIi8">
                    <GoogleMap
                        mapContainerClassName="google-map"
                        center={position}
                        zoom={15}
                    >
                        <Marker position={position} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </section>
    );
}

export default Contact;