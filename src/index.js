import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'; // Importez le fichier CSS ici
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css'; // Importez Animate.css
import 'aos/dist/aos.css'; // Importez AOS CSS
import AOS from 'aos'; // Importez AOS

AOS.init(); // Initialisez AOS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
