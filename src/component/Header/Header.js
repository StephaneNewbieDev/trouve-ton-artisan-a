import React from 'react';
import './Header.scss'; // Assure-toi que le chemin est correct

// Importe ton logo. Ajuste le chemin selon l'emplacement de ton logo.
import logoArtisan from '../../Logo01.png'; 

function Header() {
  return (
    <header className="main-header py-3">
      <div className="container-fluid custom-header-container">
        <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center w-100">

          {/* Logo */}
          <a className="navbar-brand me-auto" href="/">
            <img src={logoArtisan} alt="Trouve Ton Artisan Logo" className="header-logo" />
          </a>

          {/* Bouton Hamburger pour mobile */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenu qui se collapse sur mobile : Recherche et Navigation */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            
            {/* Barre de Recherche */}
            <div className="d-flex align-items-center header-search-box me-3">
              <input 
                type="text" 
                className="form-control header-search-input" 
                placeholder="Rechercher" 
                aria-label="Rechercher" 
              />
              <button className="btn btn-outline-secondary header-search-btn" type="submit">
                <i className="bi bi-search"></i> {/* Assure-toi d'avoir Bootstrap Icons */}
              </button>
            </div>

            {/* Navigation principale (catégories simplifiées) */}
            <ul className="navbar-nav">
              
              <li className="nav-item">
                <a className="nav-link" href="/batiment">Bâtiment</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/industrie">Industrie</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/alimentaire">Alimentaire</a>
              </li>

              {/* Bouton Particuliers */}
              <li className="nav-item">
                <a className="btn btn-primary me-2" href="/particuliers">
                  Particuliers
                </a>
              </li>
              {/* Bouton Professionnels */}
              <li className="nav-item">
                <a className="btn btn-primary" href="/professionnels">
                  Professionnels
                </a>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;