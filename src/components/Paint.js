import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const paintItems = [
    {
        image: require('../images/paint/item1.webp'),
        name: 'Leknín',
        description: 'Akrylová malba na plátně',
        size: 'rozměr 50x70 cm',
        price: '1500 Kč',
        additionalImages: [
            require('../images/paint/item1-detail1.webp'),
            require('../images/paint/item1-detail2.webp'),
            require('../images/paint/item1-detail3.webp'),
            require('../images/paint/item1-detail4.webp'),
        ],
    },
    {
        image: require('../images/paint/item2.webp'),
        name: 'Lenochod',
        description: 'Olejomalba na plátně',
        size: 'rozměr 60x80 cm',
        price: '2000 Kč',
        additionalImages: [
            require('../images/paint/item2-detail1.webp'),
            require('../images/paint/item2-detail2.webp'),
            require('../images/paint/item2-detail3.webp'),
            require('../images/paint/item2-detail4.webp'),
        ],
    },
    {
        image: require('../images/paint/item3.webp'),
        name: 'Masaryk',
        description: 'Akvarelová malba na papíře',
        size: 'rozměr 40x60 cm',
        price: '1200 Kč',
        additionalImages: [
            require('../images/paint/item3-detail1.webp'),
        ],
    },
    {
        image: require('../images/paint/item4.webp'),
        name: 'Opice',
        description: 'Digitální malba',
        size: 'rozměr 30x40 cm',
        price: '800 Kč',
        additionalImages: [
            require('../images/paint/item4-detail1.webp'),
            require('../images/paint/item4-detail2.webp'),
            require('../images/paint/item4-detail3.webp'),
            require('../images/paint/item4-detail4.webp'),
            require('../images/paint/item4-detail5.webp'),
        ],
    },
    {
        image: require('../images/paint/item5.webp'),
        name: 'Pepi',
        description: 'Mixed media na plátně',
        size: 'rozměr 70x100 cm',
        price: '2500 Kč',
        additionalImages: [
            require('../images/paint/item5-detail1.webp'),
            require('../images/paint/item5-detail2.webp'),
            require('../images/paint/item5-detail3.webp'),
            require('../images/paint/item5-detail4.webp'),
        ],
    },
];

function Paint() {
    const [open, setOpen] = useState(undefined);
    const [hoveredImage, setHoveredImage] = useState(null); // Stav pro obrázek při hoveru

    return (
        <section id="paint" className="paint-section">
            <div className="paint-content">
                <h2>Obrazy</h2>

                <p>V této galerii najdete výběr originálních obrazů, které vznikly spojením malby, intuice a barevné hravosti. Každé dílo vychází z emocí a osobního pohledu na svět – ať už jde o zvířecí portréty, osobnosti historie nebo čistě fantazijní výjevy.</p>

                <p>Stylově se obrazy pohybují mezi expresivní malbou, ilustrací a moderním uměleckým výrazem. Charakteristickými znaky jsou: syté barvy a výrazné kontrasty, uvolněná a hravá linka, kombinace detailu a abstrakce - důraz na živost.</p>

                <p>Vystavená díla zahrnují jak volně inspirované motivy z přírody (leknín, andulka), tak i zpodobnění osobností (např. realisticko-expresivní portrét T. G. Masaryka). Každý obraz má svůj vlastní příběh, ale společně tvoří souladné a esteticky propojené portfolio.</p>

                <p>Obrazy jsou dostupné v mém studiu Neon Spot v Hodoníně. Pokud máte zájem o objednání, neváhejte mě kontaktovat. Posílám i přes zásilkovnu!</p>
            </div>

            <div className="paint-container" id="paint">
                {paintItems.map((item, index) => (
                    <div
                        key={index}
                        className="paint-item cursor-pointer"
                        onClick={() => setOpen(index)}
                        onMouseEnter={() => setHoveredImage(item.additionalImages[0])} // Změna obrázku při hoveru
                        onMouseLeave={() => setHoveredImage(null)} // Návrat k původnímu obrázku
                    >
                        <img
                            src={hoveredImage && hoveredImage === item.additionalImages[0] ? hoveredImage : item.image} // Opravená podmínka pro zobrazení obrázku
                            alt={item.description}
                            className="w-full h-auto object-cover"
                        />
                        <div className="paint-description">
                            <h3 className="paint-name">{item.name || 'Obraz'}</h3>
                            <p>{item.description}</p>
                            <p>{item.size}</p>
                            <p className="paint-price">{item.price}</p>
                        </div>
                    </div>
                ))}
                <Lightbox
                    open={open !== undefined}
                    close={() => setOpen(undefined)}
                    slides={
                        open !== undefined
                            ? [
                                { src: paintItems[open].image },
                                ...paintItems[open].additionalImages.map((img) => ({
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

export default Paint;