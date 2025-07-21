import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GalleryTattoo from './components/GalleryTattoo';
import GalleryArt from './components/GalleryArt';
import Lena from './components/Lena';
import Contact from './components/Contact';
import Merch from './components/Merch';
import Paint from './components/Paint';
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
          <Route path="/merch" element={<Merch />} />
          <Route path="/paint" element={<Paint />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;