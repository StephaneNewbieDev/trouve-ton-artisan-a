import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer className="app-footer">
      <nav className="legal-nav">
        <ul className="legal-list">
          <li className="legal-item">
            <Link to="/mentions-legales">Mentions Légales</Link>
          </li>
          <li className="legal-item">
            <Link to="/donnees-personnelles">Données Personnelles</Link>
          </li>
          <li className="legal-item">
            <Link to="/accessibilite">Accessibilité</Link>
          </li>
          <li className="legal-item">
            <Link to="/cookies">Cookies</Link>
          </li>
        </ul>
      </nav>

      <div className="contact-info">
        <p>101 cours Charlemagne</p>
        <p>CS 20033</p>
        <p>69269 LYON CEDEX 02</p>
        <p>France</p>
        <p>+33 (0)4 26 73 40 00</p>
      </div>
    </footer>
  );
}

export default Footer;