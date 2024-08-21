import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dex from './pages/Dex';
import DetailPage from './pages/DetailPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dex' element={<Dex />} />
        <Route path='/detail' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
