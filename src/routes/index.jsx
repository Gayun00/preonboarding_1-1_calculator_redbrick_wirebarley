import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Mission1 from '../pages/Mission1/Mission1';
import Mission2 from '../pages/Mission2';

function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission1" element={<Mission1 />} />
        <Route path="/mission2" element={<Mission2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;
