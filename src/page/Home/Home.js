import React from 'react';
import './Home.scss';
import ArtisanCard from '../../component/ArtisanCard/ArtisanCard.js'; // On réutilisera ce composant pour afficher les artisans

function Home() {
  // Ici, on importera les données des artisans du fichier JSON
  const artisansDuMois = [
    {
      id: 1,
      name: 'Vallis Bellemare',
      specialty: 'Plombier',
      note: 4,
      location: 'Vienne',
    },
    {
      id: 2,
      name: 'Amitee Lécuyer',
      specialty: 'Couturier',
      note: 4.5,
      location: 'Annecy',
    },
    {
      id: 3,
      name: 'Leala Dennis',
      specialty: 'Coiffeur',
      note: 5,
      location: 'Lyon',
    },
  ];

  return (
    <div className="home-page">
      <section className="how-to-find">
        <h2>Comment trouver mon artisan?</h2>
        <ol className="steps">
          <li className="step">
            Choisir la catégorie d'artisanat dans le menu.
          </li>
          <li className="step">Choisir un artisan.</li>
          <li className="step">
            Le contacter via le formulaire de contact. Une réponse sera
            apportée sous 48h.
          </li>
        </ol>
      </section>

      <section className="artisans-of-month">
        <h2>Artisans du mois</h2>
        <div className="artisans-container">
          {artisansDuMois.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;