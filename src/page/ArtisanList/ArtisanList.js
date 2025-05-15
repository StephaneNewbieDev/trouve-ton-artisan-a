import React from 'react';
import './ArtisanList.scss';
import ArtisanCard from '../../component/ArtisanCard/ArtisanCard';
import artisansData from '../../data/datas.json';

function ArtisanList() {
  return (
    <div className="artisan-list-page">
      <h1>Liste des Artisans</h1>
      <div className="artisans-container">
        {artisansData.map(artisan => (
          <ArtisanCard key={artisan.id} artisan={artisan} />
        ))}
      </div>
    </div>
  );
}

export default ArtisanList;