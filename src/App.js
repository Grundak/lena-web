import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GalleryTattoo from './components/GalleryTattoo';
import GalleryArt from './components/GalleryArt';
import Lena from './components/Lena';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Lena />} />
          <Route path="/tattoo-gallery" element={<GalleryTattoo />} />
          <Route path="/art-gallery" element={<GalleryArt />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;