import React, { useState, useEffect, useRef } from "react";
import Logo from "../images/logo.webp";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
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
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <button
          className="hamburger-menu"
          onClick={() => {
            setMenuOpen(!menuOpen)
            console.log("Menu open:", !menuOpen);
          }}
        >
          ☰
        </button>
        <div className={`nav-right ${menuOpen ? "open" : ""}`}>
          <ol>
            <li><a href="#lena">Lena</a></li>
            <li ref={dropdownRef} className="dropdown">
              <button onClick={toggleDropdown} className="dropbtn">Galerie</button>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <a href="#tattoo">Tetování</a>
                  <a href="#art">Dizajny</a>
                </div>
              )}
            </li>
            <li><a href="#contact">Kontakt</a></li>
          </ol>
        </div>
      </div>
    </header>
  );
}

export default Header;
