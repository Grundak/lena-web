import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const merchItems = [
    {
        image: require('../images/merch/item1.webp'),
        name: 'Pexeso',
        description: '300g papír / oboustranná lesklá laminace',
        size: 'rozměr kartičky 48x48 mm, 32 párů, celý arch',
        price: '250 Kč',
        additionalImages: [
            require('../images/merch/item1-detail1.webp'),
            require('../images/merch/item1-detail2.webp'),
        ],
    },
    {
        image: require('../images/merch/item2.webp'),
        name: 'Taška',
        description: '100% bavlna, digitální tisk',
        size: 'rozměr 38x42 cm, šité ucho 70 cm',
        price: '250 Kč',
        additionalImages: [
            require('../images/merch/item2-detail1.webp'),
            require('../images/merch/item2-detail2.webp'),
            require('../images/merch/item2-detail3.webp'),
        ],
    },
];

function Merch() {
    const [open, setOpen] = useState(undefined);
    const [hoveredImage, setHoveredImage] = useState(null); // Stav pro obrázek při hoveru

    return (
        <section id="merch" className="merch-section">
            <div className="merch-content">
                <h2>Merch</h2>
                <p>„Autorské motivy, které můžeš nosit, darovat nebo si jen užívat.“</p>
                <p>Můj merch vznikl z lásky k výtvarnu a touhy přenést svět tetování i mimo kůži. Každý motiv, který najdeš na taškách, kartičkách nebo pexesu, vychází z mých autorských návrhů – stejných, jaké používám i při tvorbě tetování.</p>
                <p>Merch je dostupný v mém studiu Neon Spot v Hodoníně. Pokud bys měl zájem o objednání, neváhej mě kontaktovat. Posílám i přes zásilkovnu!</p>
            </div>

            <div className="merch-container" id="merch">
                {merchItems.map((item, index) => (
                    <div
                        key={index}
                        className="merch-item cursor-pointer"
                        onClick={() => setOpen(index)}
                        onMouseEnter={() => setHoveredImage(item.additionalImages[0])} // Změna obrázku při hoveru
                        onMouseLeave={() => setHoveredImage(null)} // Návrat k původnímu obrázku
                    >
                        <img
                            src={hoveredImage && hoveredImage === item.additionalImages[0] ? hoveredImage : item.image} // Opravená podmínka pro zobrazení obrázku
                            alt={item.description}
                            className="w-full h-auto object-cover"
                        />
                        <div className="merch-description">
                            <h3 className="merch-name">{item.name || 'Merch Item'}</h3>
                            <p>{item.description}</p>
                            <p>{item.size}</p>

                            <p className="merch-price">{item.price}</p>
                        </div>
                    </div>
                ))}
                <Lightbox
                    open={open !== undefined}
                    close={() => setOpen(undefined)}
                    slides={
                        open !== undefined
                            ? [
                                  { src: merchItems[open].image },
                                  ...merchItems[open].additionalImages.map((img) => ({
                                      src: img,
                                  })),
                              ]
                            : []
                    }
                    index={0}
                />
            </div>
            <button className="button-booking">
                <Link to="/contact/#form">Objednej si</Link>
            </button>
        </section>
    );
}

export default Merch;