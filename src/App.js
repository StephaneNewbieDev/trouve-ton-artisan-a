import React from 'react';
import { /* BrowserRouter as Router, */ Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home.js';
import ArtisanList from './page/ArtisanList/ArtisanList.js';
import ArtisanDetails from './page/ArtisanDetails/ArtisanDetails.js';
import NotFound from './page/NotFound/NotFound.js';
import Header from './component/Header/Header.js';
import Footer from './component/Footer/Footer.js';
import './scss/style.scss'; // Si tu as des styles globaux

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>  {/* Utilise Routes au lieu de Switch */}
          <Route exact path="/" element={<Home />} />  {/* Utilise element={} pour spécifier le composant */}
          <Route path="/artisans/:category" element={<ArtisanList />} />
          <Route path="/artisan/:id" element={<ArtisanDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;