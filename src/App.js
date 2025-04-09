import logo from './logo.svg';
import lenaImage from './lena.jpg'; // Přidejte obrázek Leny do projektu a importujte jej
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navigation">
          <div className="nav-left">
            <span>Lena Tattoo Art</span>
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="nav-right">
            <ol>
              <li><a href="#lena">Lena</a></li>
              <li><a href="#galerie">Galerie</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ol>
          </div>
        </div>
      </header>
      <section id="lena" className="lena-section">
        <div className="lena-left">
          <h2>Lena Tattoo Art</h2>
          <img src={lenaImage} alt="Lena" className="lena-image" />
        </div>
        <div className="lena-right">
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
    </div>
  );
}

export default App;