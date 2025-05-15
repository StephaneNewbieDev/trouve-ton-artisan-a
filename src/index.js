import React from 'react';
import ReactDOM from 'react-dom/client'; // Importez createRoot depuis react-dom/client
import { BrowserRouter } from 'react-router-dom'; // Importe BrowserRouter
import App from './App';
import './index.css'; // Ou tout autre style global

const root = ReactDOM.createRoot(document.getElementById('root')); // Utilisez createRoot
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Englobe App avec BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);