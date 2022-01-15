import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PixivHome from './PixivHome';

const PixivRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PixivHome />} />
    </Routes>
  );
};

export default PixivRoutes;
