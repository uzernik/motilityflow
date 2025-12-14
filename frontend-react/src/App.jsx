import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LandingPageUrgent from './pages/LandingPageUrgent';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageUrgent />} />
      <Route path="/lp.v0" element={<LandingPage />} />
      <Route path="/lp.v1" element={<LandingPageUrgent />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
