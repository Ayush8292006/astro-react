import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Jathagam from './pages/Jathagam.jsx';
import Porutham from './pages/Porutham.jsx';
import RasiPalan from './pages/RasiPalan.jsx';
import Consult from './pages/Consult.jsx';
import Account from './pages/Account.jsx';
import Shop from './pages/Shop.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.querySelector('.app-main')?.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app-shell">
      <div className="app">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/jathagam" element={<Jathagam />} />
          <Route path="/porutham" element={<Porutham />} />
          <Route path="/rasi-palan" element={<RasiPalan />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/account" element={<Account />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}
