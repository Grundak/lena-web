import lenaImage from './images/lena.webp'; // Přidejte obrázek Leny do projektu a importujte jej
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <Header />

      <section id="lena" className="lena-section">
        <div className="lena-left">
          <img src={lenaImage} alt="Lena" className="lena-image" />
        </div>
        <div className="lena-right">
          <button className="button-booking">Objednat se</button>
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