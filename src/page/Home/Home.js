import React from 'react';
import './Home.scss';
import ArtisanCard from '../../component/ArtisanCard/ArtisanCard';
import artisansData from '../../data/datas.json';

function Home() {
  const artisansEnVedette = artisansData.filter(artisan => artisan.top);

  return (
    <div className="home-page">
      <section className="py-5 text-center"> {/* py-5 pour du padding vertical, text-center pour centrer le texte */}
  <h2>Comment trouver mon artisan?</h2>
  <ol className="list-unstyled d-flex flex-column align-items-center"> {/* list-unstyled pour retirer les puces, d-flex pour flexbox, flex-column pour aligner en colonne, align-items-center pour centrer horizontalement */}
    <li className="bg-light border border-secondary rounded p-3 mb-3 w-75">Choisir la catégorie d'artisanat dans le menu.</li> {/* bg-light, border, rounded, p-3 pour le padding, mb-3 pour la marge basse, w-75 pour une largeur de 75% */}
    <li className="bg-light border border-secondary rounded p-3 mb-3 w-75">Choisir un artisan.</li>
    <li className="bg-light border border-secondary rounded p-3 w-75">
      Le contacter via le formulaire de contact. Une réponse sera apportée sous 48h.
    </li>
  </ol>
</section>
      <section className="artisans-of-month">
        <h2>Artisans du moment</h2>
        <div className="artisans-container">
          {artisansEnVedette.length > 0 ? (
            artisansEnVedette.map(artisan => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))
          ) : (
            <p>Aucun artisan en vedette...</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;