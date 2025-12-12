import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const goToDashboard = () => navigate('/dashboard');

  return (
    <div className="landing">
      {/* HERO */}
      <section className="hero">
        <h1>Your stomach feels broken.</h1>
        <h2>We help you fix it.</h2>
        <p className="hero-tagline">
          Mounjaro changes everything — your hunger, your stomach, your rhythm. This app helps you master the ride.
        </p>
        <p className="hero-sub">
          Track symptoms, understand patterns, and take control of your gut health.
        </p>
        <button className="cta-btn" onClick={goToDashboard}>
          Start Tracking →
        </button>
      </section>

      {/* WHY YOU'RE SUFFERING */}
      <section className="section">
        <h2>Why You're Suffering</h2>
        <ul className="bullets">
          <li>
            <strong>Slow motility</strong> — food sits too long, causing bloating and discomfort
          </li>
          <li>
            <strong>No visibility</strong> — you can't fix what you can't measure
          </li>
          <li>
            <strong>Trial and error</strong> — random diets and supplements waste time and money
          </li>
        </ul>
      </section>

      {/* HOW MOTILITYCOACH HELPS */}
      <section className="section">
        <h2>How MotilityCoach Helps</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📊 Track Daily</h3>
            <p>Log meals, symptoms, and energy levels in seconds</p>
          </div>
          <div className="feature-card">
            <h3>🔍 Find Patterns</h3>
            <p>See which foods and habits trigger your symptoms</p>
          </div>
          <div className="feature-card">
            <h3>📈 Measure Progress</h3>
            <p>Watch your motility improve over weeks and months</p>
          </div>
          <div className="feature-card">
            <h3>🎯 Personalized</h3>
            <p>Get insights tailored to your unique gut profile</p>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="section preview-section">
        <h2>Dashboard Preview</h2>
        <div className="preview-placeholder">
          <span>[ Dashboard Screenshot ]</span>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="section founder-section">
        <div className="founder-box">
          <p className="founder-message">
            "When I started Mounjaro, I realized something: this drug plays with your head and your stomach. 
            The ride can be wild — but you can conquer it. MotilityCoach is the tool I wish I had."
          </p>
          <p className="founder-signature">— Founder</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section cta-section">
        <h2>Ready to feel better?</h2>
        <button className="cta-btn" onClick={goToDashboard}>
          Open Dashboard →
        </button>
      </section>
    </div>
  );
}

export default LandingPage;

