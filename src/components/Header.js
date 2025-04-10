import React, { useState, useEffect, useRef } from "react";

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
          <span>Lena <strong>Tattoo</strong> Art</span>
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
