import './App.css';
import Header from './components/Header';
import GalleryTattoo from './components/GalleryTattoo';
import GalleryArt from './components/GalleryArt';
import Lena from './components/Lena';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header />

      <Lena />

      <GalleryTattoo />

      <GalleryArt />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;