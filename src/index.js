import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Carro from './pages/carro';
import Sorvete from './pages/Sorvete';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/sorvete' element={<Sorvete />}  />
        <Route path='/carro' element={<Carro />}  />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
