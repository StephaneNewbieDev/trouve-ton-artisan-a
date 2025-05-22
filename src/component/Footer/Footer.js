import React from 'react';
import './Footer.scss';
import Logo01 from '../../Logo01.png'; // Assurez-vous que le chemin est correct



function Footer() {
  return (
    <footer className="main-footer">
      {/* Forme supérieure (la "bulle" bleue claire) */}
      <div className="footer-top-shape"></div>

      <div className="footer-content container"> {/* Utilise container pour centrer le contenu */}
        <div className="row pt-5 pb-4"> {/* Padding top/bottom */}

          {/* Colonne 1: Logo et Infos de Contact Générales */}
          <div className="col-lg-4 col-md-6 mb-">
            <div className="footer-logo-container mb-3">
              <img src={Logo01} alt="Trouve Ton Artisan Logo" className="footer-logo mb-2" />
            </div>
            <p className="footer-text">
              Plateforme de mise en relation entre particuliers et artisans.
            </p>
            <p className="footer-text">
              Nangy, Auvergne-Rhône-Alpes, France
            </p>
            <p className="footer-text">
              Email: contact@trouvetonartisan.com<br/>
              Téléphone: +33 (0)4 50 XX XX XX
            </p>
          </div>

          {/* Colonne 2: Informations Utiles (Exemple: plan du site ou aides) */}
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="footer-title mb-3">Informations Utiles</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/faq" className="footer-link">FAQ</a></li>
              <li><a href="/comment-ca-marche" className="footer-link">Comment ça marche ?</a></li>
              <li><a href="/devenir-artisan" className="footer-link">Devenir Artisan</a></li>
              <li><a href="/nos-engagements" className="footer-link">Nos Engagements</a></li>
            </ul>
          </div>

          {/* Colonne 3: Liens Rapides (Exemple: catégories principales) */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title mb-3">Accès Rapide</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/batiment" className="footer-link">Bâtiment</a></li>
              <li><a href="/industrie" className="footer-link">Industrie</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/alimentaire" className="footer-link">Alimentaire</a></li>
            </ul>
          </div>

          {/* Colonne 4: Suivez-nous / Réseaux sociaux (Image d'arrière-plan stylisée) */}
          <div className="col-lg-2 col-md-6 mb-4 d-flex justify-content-center align-items-center">
            {/* Ici, tu peux mettre des icônes de réseaux sociaux ou laisser l'espace pour une image de fond stylisée */}
            {/* L'image de fond du design original est difficile à recréer en pur CSS sans l'image elle-même */}
            {/* Pour l'instant, on va juste laisser l'espace et les icônes seront dans la partie inférieure */}
          </div>

        </div>

        {/* Ligne de séparation */}
        <hr className="footer-divider my-4" />

        {/* Section Mentions Légales et Réseaux Sociaux */}
        <div className="row pb-3 align-items-center">
          <div className="col-md-8 text-center text-md-start">
            <ul className="list-inline footer-bottom-links mb-2 mb-md-0">
              <li className="list-inline-item"><a href="/mentions-legales" className="footer-link">Mentions légales</a></li>
              <li className="list-inline-item"><a href="/politique-confidentialite" className="footer-link">Politique de confidentialité</a></li>
              <li className="list-inline-item"><a href="/accessibilite" className="footer-link">Accessibilité</a></li>
              <li className="list-inline-item"><a href="/plan-du-site" className="footer-link">Plan du site</a></li>
              <li className="list-inline-item"><a href="/gestion-cookies" className="footer-link">Gestion des cookies</a></li>
            </ul>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <ul className="list-inline social-icons mb-0">
              <li className="list-inline-item">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="bi bi-facebook"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="bi bi-twitter"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="bi bi-linkedin"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="bi bi-instagram"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="bi bi-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;