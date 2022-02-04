import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PixivHome from '../pages/Pixiv/PixivHome';

const PixivRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PixivHome />} />
    </Routes>
  );
};

export default PixivRoutes;
