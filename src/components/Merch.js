import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'; // Přidání useState

const merchItems = [
    {
        image: require('../images/merch/item1.webp'),
        description: 'Tričko Lena Tattoo Art - Černé',
        price: '500 Kč',
    },
    {
        image: require('../images/merch/item2.webp'),
        description: 'Tričko Lena Tattoo Art - Bílé',
        price: '500 Kč',
    },
    // Přidejte další položky podle potřeby
];

function Merch() {
    const [open, setOpen] = useState(undefined); // Inicializace stavu open

    return (
        <section id="merch" className="merch-section">
            <div className="merch-content">
                <h2>Merch</h2>
                <p>Na této stránce brzy najdete naše produkty.</p>
                <p>Pokud máte zájem o nějaký konkrétní produkt, neváhejte nás kontaktovat.</p>
                
            </div>

            <div className="merch-container" id="merch">
                {merchItems.map((item, index) => (
                    <div
                        key={index}
                        className="merch-item cursor-pointer"
                        onClick={() => setOpen(index)} // Nastavení indexu při kliknutí
                    >
                        <img
                            src={item.image}
                            alt={item.description}
                            className="w-full h-auto object-cover"
                        />
                        <div className="merch-description">
                            <p>{item.description}</p>
                            <p className="merch-price">{item.price}</p>
                        </div>
                    </div>
                ))}
                <Lightbox
                    open={open !== undefined} // Otevření lightboxu, pokud je open definován
                    close={() => setOpen(undefined)} // Zavření lightboxu
                    slides={merchItems.map((item) => ({
                        src: item.image,
                    }))}
                    index={open} // Nastavení aktuálního indexu
                />
            </div>
            <button className="button-booking"><Link to="/contact/#form">Objednej si</Link></button>
        </section>
    );
}

export default Merch;