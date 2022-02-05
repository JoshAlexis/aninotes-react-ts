import { Routes, Route } from 'react-router-dom';
import AddPixiv from 'src/pages/Pixiv/AddPixiv';
import PixivHome from '../pages/Pixiv/PixivHome';

const PixivRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PixivHome />} />
      <Route path="/add" element={<AddPixiv />} />
    </Routes>
  );
};

export default PixivRoutes;
