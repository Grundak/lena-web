import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Lena.css'; // přidej tento import, pokud ještě nemáš

// Import obrázků pro slideshow
const lenaImages = [
  require('../images/lena-lejskova-tattoo-artist-hodonin1.webp'),
  require('../images/lena-lejskova-tattoo-artist-hodonin2.webp'),
  require('../images/lena-lejskova-tattoo-artist-hodonin3.webp'),
  require('../images/lena-lejskova-tattoo-artist-hodonin4.webp'),
  require('../images/lena-lejskova-tattoo-artist-hodonin5.webp'),
];

function Lena() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % lenaImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="lena" className="lena-section">
      <div className="lena-left">
        <img
          key={currentImageIndex} // spustí animaci při změně obrázku
          src={lenaImages[currentImageIndex]}
          alt={`Lena Lejsková ${currentImageIndex + 1}`}
          className="lena-image fade-in"
        />
      </div>
      <div className="lena-right">
        <h1 className="lena-name">Lena Lejsková Tattoo Art - Hodonín</h1>

        <h2>O mně</h2>
        <p>
          Jsem <strong>Lena Lejsková</strong>, tatérka z <strong>Hodonína</strong>. V roce 2006 jsem vystudovala malbu a od té doby tvořím umění v různých formách. <strong>Tetování</strong> se věnuji osmým rokem – přirozeně v něm propojuji volnost malby s osobním příběhem každého motivu.
        </p>

        <h2>Inspirace</h2>
        <p>
          Inspiraci čerpám hlavně z přírody – z jejích bytostí, tvarů a rostlin. Pracuji se stylizací, abstraktními linkami a výraznými barvami, které často plynou do měkkých, kouřových stínů. Opakující se motivy v tetování mě vedou k hledání nových cest a posouvání reality do světa abstrakce, který nemá hranice. Každé tetování je tak trochu malba – jedinečná a živá.
        </p>

        <h2>Úspěchy</h2>
        <p>
          V roce 2024 jsem se zúčastnila tatérských konvencí v Olomouci (1. místo v kategorii color) a v Pardubicích (3. místo v kategorii color)
        </p>

        <h2>Kde tetuji?</h2>
        <p>
          Tetuji ve studiu Neon Spot v <strong>Hodoníně</strong>. Pokud máš zájem o <strong>tetování</strong>, tak se neváhej objednat. Těším se na tebe!
        </p>

        <button className="button-booking">
          <Link to="/contact/#form">Objednat se</Link>
        </button>
      </div>
    </section>
  );
}

export default Lena;
