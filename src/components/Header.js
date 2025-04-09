import React, { useState, useEffect, useRef } from "react";
import logo from "../logo.svg"; // Přizpůsob cestu

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Zavře dropdown, když klikneš mimo
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
          <span>Lena Tattoo Art</span>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="nav-right">
          <ol>
            <li><a href="#lena">Lena</a></li>

            <li ref={dropdownRef} className="dropdown">
              <button onClick={toggleDropdown} className="dropbtn">Galerie</button>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <a href="#tattoo">Tattoo</a>
                  <a href="#art">Art</a>
                </div>
              )}
            </li>

            <li><a href="#kontakt">Kontakt</a></li>
          </ol>
        </div>
      </div>

    </header>
  );
}

export default Header;
