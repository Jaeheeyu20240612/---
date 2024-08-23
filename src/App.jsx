import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dex from './pages/Dex';
import DetailPage from './pages/DetailPage';
import { PokemonProvider } from './context/Context';

const App = () => {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dex' element={<Dex />} />
          <Route path='/detail' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
};

export default App;
