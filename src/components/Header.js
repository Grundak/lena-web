import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link z react-router-dom
import Logo from "../images/lena-lejskova-tattoo-artist-hodonin-logo.webp";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null); // Ref pro hamburger menu

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      // Zavření dropdownu
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      // Zavření hamburger menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="App-header">
      <div className="navigation">
        <div className="nav-left">
          <Link to="/">
            <img src={Logo} alt="lena-lejskova-tattoo-artist-hodonin-logo" className="logo" />
          </Link>
        </div>
        <button
          className="hamburger-menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
            console.log("Menu open:", !menuOpen);
          }}
        >
          ☰
        </button>
        <div
          className={`nav-right ${menuOpen ? "open" : ""}`}
          ref={menuRef} // Ref pro hamburger menu
        >
          <ol>
            <li>
              <Link to="/">Lena</Link> {/* Odkaz na domovskou stránku */}
            </li>
            <li ref={dropdownRef} className="dropdown">
              <button onClick={toggleDropdown} className="dropbtn">Tattoo</button>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/tattoo-gallery">Tetování</Link> {/* Odkaz na tetovací galerii */}
                  <Link to="/art-gallery">Dizajny</Link> {/* Odkaz na uměleckou galerii */}
                </div>
              )}
            </li>
            <li>
              <Link to="/merch">Merch</Link> {/* Odkaz na stránku s merchem */}
            </li>
            <li>
              <Link to="/paint">Obrazy</Link> {/* Odkaz na kontaktní stránku */}
            </li>
            <li>
              <Link to="/contact">Kontakt</Link> {/* Odkaz na kontaktní stránku */}
            </li>

          </ol>
        </div>
      </div>
    </header>
  );
}

export default Header;