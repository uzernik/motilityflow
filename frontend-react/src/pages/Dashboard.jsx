import { useState, useEffect } from 'react';
import MotilityCard from '../components/MotilityCard';
import CGMGraph from '../components/CGMGraph';
import MotilityGraph from '../components/MotilityGraph';
import DailyInputStrip from '../components/DailyInputStrip';
import AIPanel from '../components/AIPanel';
import UserSelectModal from '../components/UserSelectModal';

const API_URL = 'http://localhost:8000';

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [energy, setEnergy] = useState(5);
  const [hunger, setHunger] = useState(5);
  const [symptoms, setSymptoms] = useState([]);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  
  // User state — null means show selection modal
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/motility`)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleUserSelected = (user) => {
    setCurrentUser(user);
  };

  const handleSwitchUser = () => {
    setCurrentUser(null);
    setAiPanelOpen(false);
  };

  return (
    <div className="app">
      {/* User selection modal — shown when no user selected */}
      {!currentUser && (
        <UserSelectModal onUserSelected={handleUserSelected} />
      )}

      <header className="header">
        <div className="header__top">
          <div className="header__spacer" />
          <div className="header__center">
            <h1>Motility Dashboard</h1>
            <p className="subtitle">Real-time motility tracking</p>
          </div>
          <div className="header__right">
            {currentUser && (
              <button className="switch-user-btn" onClick={handleSwitchUser}>
                {currentUser.name} ▾
              </button>
            )}
            <button
              className="ask-ai-btn"
              onClick={() => setAiPanelOpen(!aiPanelOpen)}
              disabled={!currentUser}
            >
              Ask AI
            </button>
          </div>
        </div>
      </header>

      <AIPanel 
        isOpen={aiPanelOpen} 
        onClose={() => setAiPanelOpen(false)} 
        currentUser={currentUser}
      />

      <main className="dashboard">
        {/* NEW VISUAL MODULES — ABOVE THE FOLD */}
        <section className="card card-full-width">
          <CGMGraph />
        </section>

        <div className="dashboard-row">
          <section className="card card-half">
            <MotilityGraph />
          </section>
          <section className="card card-half">
            <DailyInputStrip />
          </section>
        </div>

        {/* BLOCK 1 — BACKEND STATE */}
        <section className="card">
          <h2>Current State</h2>
          <MotilityCard data={data} loading={loading} error={error} />
        </section>

        {/* BLOCK 2 — USER INPUTS */}
        <section className="card">
          <h2>User Inputs</h2>

          {/* Energy slider */}
          <label className="input-row">
            Energy Level: {energy}
            <input
              type="range"
              min="0"
              max="10"
              value={energy}
              onChange={(e) => setEnergy(Number(e.target.value))}
            />
          </label>

          {/* Hunger slider */}
          <label className="input-row">
            Hunger Level: {hunger}
            <input
              type="range"
              min="0"
              max="10"
              value={hunger}
              onChange={(e) => setHunger(Number(e.target.value))}
            />
          </label>

          {/* Symptoms checkboxes */}
          <div className="symptoms-box">
            <h3>Symptoms</h3>
            {["burp", "bloat", "gas", "vomit", "nausea"].map((symptom) => (
              <label key={symptom}>
                <input
                  type="checkbox"
                  checked={symptoms.includes(symptom)}
                  onChange={() => {
                    if (symptoms.includes(symptom)) {
                      setSymptoms(symptoms.filter((s) => s !== symptom));
                    } else {
                      setSymptoms([...symptoms, symptom]);
                    }
                  }}
                />
                {symptom}
              </label>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
