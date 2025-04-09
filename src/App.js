import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navigation">
          <div className="nav-left">
            <a href="#lena">Lena</a>
            <a href="#galerie">Galerie</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <div className="nav-right">
            <span>Lena Tattoo Art</span>
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;