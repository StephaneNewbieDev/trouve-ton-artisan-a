import React from 'react';
import './ArtisanCard.scss';

function ArtisanCard({ artisan }) { // Déstructuration : on extrait "artisan" de l'objet des props
  return (
    <div className="artisan-card">
      <img src="../../artisan.jpg" alt={artisan.name} />
      <h2>{artisan.name}</h2> 
      <div className="rating">Note : {artisan.note} étoiles</div>
      <p className="specialty">Spécialité : {artisan.specialty}</p>
      <p className="location">Localisation : {artisan.location}</p>
    </div>
  );
}

export default ArtisanCard;