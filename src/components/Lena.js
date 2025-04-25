import React from 'react';
import { Link } from 'react-router-dom';

const lenaImage = require('../images/lena.webp');

function Lena() {


  return (
    <section id="lena" className="lena-section">
      <div className="lena-left">
        <img src={lenaImage} alt="Lena" className="lena-image" />
      </div>
      <div className="lena-right">
        <button className="button-booking"><Link to="/contact/#form">Objednat se</Link></button>
        <p>
          Jsem <strong>Lena Lejsková</strong>, tatérka z jižní Moravy. V roce 2006 jsem vystudovala malbu a od té doby tvořím umění v různých formách. Tetování se věnuji osmým rokem – přirozeně v něm propojuji volnost malby s osobním příběhem každého motivu.</p>

        <p>Inspiraci čerpám hlavně z přírody – z jejích bytostí, tvarů a rostlin. Pracuji se stylizací, abstraktními linkami a výraznými barvami, které často plynou do měkkých, kouřových stínů.</p>

        <p>Opakující se motivy v tetování mě vedou k hledání nových cest a posouvání reality do světa abstrakce, který nemá hranice. Každé tetování je tak trochu malba – jedinečná a živá.</p>

        <p>V roce 2024 jsem se zúčastnila tatérských konvencí v Olomouci (1. místo v kategorii color) a v Pardubicích (3. místo v kategorii color)</p>
      </div>
    </section>
  );
}


export default Lena;

