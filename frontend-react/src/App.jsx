import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LandingPageUrgent from './pages/LandingPageUrgent';
import EntryScreen from './pages/EntryScreen';
import Dashboard from './pages/Dashboard';
import CGMImport from './pages/CGMImport';
import BusinessPlan from './pages/BusinessPlan';
import BusinessMarket from './pages/BusinessMarket';
import BusinessPersonal from './pages/BusinessPersonal';
import ProductPage from './pages/ProductPage';
import PharmaOpportunities from './pages/PharmaOpportunities';
import PharmaNote from './pages/PharmaNote';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageUrgent />} />
      <Route path="/lp.v0" element={<LandingPage />} />
      <Route path="/lp.v1" element={<LandingPageUrgent />} />
      <Route path="/entry" element={<EntryScreen />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cgm" element={<CGMImport />} />
      <Route path="/business" element={<BusinessPlan />} />
      <Route path="/business/market" element={<BusinessMarket />} />
      <Route path="/business/personal" element={<BusinessPersonal />} />
      <Route path="/business/product" element={<ProductPage />} />
      <Route path="/business/pharma" element={<PharmaOpportunities />} />
      <Route path="/business/pharma-note" element={<PharmaNote />} />
    </Routes>
  );
}

export default App;
