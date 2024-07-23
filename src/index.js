import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Asegúrate de que el archivo App.js esté en la misma carpeta
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
