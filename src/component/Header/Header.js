import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../Logo01.png'; // Importe le logo (à adapter selon ton emplacement)

function Header() {
  return (
    <header className="app-header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Trouve ton artisan" className="logo" />
        </Link>
      </div>

      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/artisans/batiment">Bâtiment</Link>
          </li>
          <li className="nav-item">
            <Link to="/artisans/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/artisans/fabrication">Fabrication</Link>
          </li>
          <li className="nav-item">
            <Link to="/artisans/alimentation">Alimentation</Link>
          </li>
        </ul>
      </nav>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Rechercher un artisan..."
          className="search-input"
        />
        <button className="search-button">Rechercher</button>
      </div>
    </header>
  );
}

export default Header;