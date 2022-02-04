import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import PixivRoutes from './routes/PixivRoutes';
import './index.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pixiv/*" element={<PixivRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
