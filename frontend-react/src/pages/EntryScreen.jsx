import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EntryScreen.css';

function EntryScreen() {
  const navigate = useNavigate();
  const [shotTime, setShotTime] = useState('');

  const handleContinue = () => {
    navigate('/dashboard');
  };

  const handleNotSure = () => {
    navigate('/dashboard');
  };

  return (
    <div className="entry-screen">
      <div className="entry-container">
        <h1 className="entry-title">Let's figure out what's going on right now.</h1>
        <p className="entry-subtitle">This takes less than a minute.</p>

        <div className="entry-question-box">
          <label className="entry-question">When was your last GLP-1 shot?</label>
          <input
            type="text"
            className="entry-input"
            placeholder="e.g., Yesterday morning, 2 days ago"
            value={shotTime}
            onChange={(e) => setShotTime(e.target.value)}
          />
          <p className="entry-helper">An estimate is fine.</p>
        </div>

        <button className="entry-btn" onClick={handleContinue}>
          Continue →
        </button>

        <button className="entry-link" onClick={handleNotSure}>
          I'm not sure
        </button>
      </div>
    </div>
  );
}

export default EntryScreen;

