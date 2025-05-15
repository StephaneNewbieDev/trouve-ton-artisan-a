import React from 'react';
import './ArtisanCard.scss';

function ArtisanCard({ artisan }) {
  return (
    <div className="artisan-card">
      <h3>{artisan.name}</h3>
      <div className="rating">Note : {artisan.note} étoiles</div>
      <p className="specialty">Spécialité : {artisan.specialty}</p>
      <p className="location">Localisation : {artisan.location}</p>
    </div>
  );
}

export default ArtisanCard;