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
                        <li>Lenka Lejsková</li>
                        <li>Neon Spot Tattoo Studio</li>
                        <li>Národní třída 50, 695 01, Hodonín</li>
                        <li>tel. +420 777 777 777</li>
                    </ol>
                </div>
                <div className="tattoo-studio">
                    <img src={Neonspot} alt="tattoo-studio"></img>
                </div>
                <div className="contact-icons">
                    <i className="fas fa-phone fa-3x"></i>
                    <i className="fas fa-envelope fa-3x"></i>
                    <i className="fas fa-map-marker-alt fa-3x"></i>
                </div>
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
            </div>
        </section>
    );
}

export default Contact;