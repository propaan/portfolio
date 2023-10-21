import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.scss';
import Accueil from './Pages/Accueil';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './Pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
