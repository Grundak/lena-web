import logo from './logo.svg';
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
    </div>
  );
}

export default App;