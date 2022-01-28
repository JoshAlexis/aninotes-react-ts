import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddPixiv from './AddPixiv';
import PixivHome from './PixivHome';

const PixivRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PixivHome />} />
      <Route path="/add" element={<AddPixiv />} />
    </Routes>
  );
};

export default PixivRoutes;
