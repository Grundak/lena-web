import React from 'react';

const lenaImage = require('../images/lena.webp'); 

function Lena() {

    
return (
<section id="lena" className="lena-section">
<div className="lena-left">
  <img src={lenaImage} alt="Lena" className="lena-image" />
</div>
<div className="lena-right">
  <button className="button-booking"><a href="tel:+420777777777">Objednat se</a></button>
  <h3>O mně</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus lacinia odio vitae vestibulum vestibulum. 
    Cras venenatis euismod malesuada. 
    Nulla facilisi. 
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
  </p>
</div>
</section>
);
}


export default Lena;

