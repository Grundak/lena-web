import React from "react";

function Footer() {
    return (
        <footer className="App-footer">
            <div className="footer-upper">
                <div className="footer-legal">
                    <ol>
                        <li><strong>Lenka Lejsková</strong></li>
                        <li>+420 777 777 777</li>
                        <li>Národní třída 50</li>
                        <li>695 01, Hodonín</li>
                        <li>IČO: 99999999</li>
                    </ol>
                </div>
                <div className="footer-references">
                    <a href="https://www.facebook.com/lenalejskovaart">Facebook</a>
                    <a href="https://www.instagram.com/lenalejskova_tattooer/">Instagram</a>
                </div>
            </div>
            <div className="footer-author">
                <a href="">Dev & Des by Grundak</a>
            </div>
            <div className="footer-down">
                <p>&copy; 2025 <strong>Lena Tattoo Art</strong>. Všechna práva vyhrazena.</p>
            </div>
        </footer>
    );
}

export default Footer;