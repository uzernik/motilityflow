import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPageUrgent() {
  const navigate = useNavigate();

  const goToDashboard = () => navigate('/dashboard');

  return (
    <div className="landing">
      {/* HERO */}
      <section className="hero">
        <h1>Feeling sick after your GLP-1 shot?</h1>
        <h2>Nausea. Bloating. Food feels stuck.</h2>
        <p className="hero-tagline">
          You're not doing anything wrong.
        </p>
        <p className="hero-sub">
          GLP-1 drugs slow digestion — sometimes food just doesn't move.
        </p>
        <button className="cta-btn" onClick={goToDashboard}>
          Get help now →
        </button>
        <p className="hero-helper">Takes under a minute. No signup.</p>
      </section>

      {/* WHAT'S HAPPENING RIGHT NOW */}
      <section className="section">
        <h2>What's happening right now</h2>
        <ul className="bullets">
          <li>
            Food is sitting in your stomach longer than usual
          </li>
          <li>
            You can't tell if it's better to eat or wait
          </li>
          <li>
            Guessing often makes symptoms worse
          </li>
        </ul>
      </section>

      {/* WHAT HELPS RIGHT NOW */}
      <section className="section">
        <h2>What helps right now</h2>
        <ul className="bullets">
          <li>Pause eating for a bit</li>
          <li>Gentle walking (10–20 minutes)</li>
          <li>Liquids or soft foods only</li>
          <li>Avoid fats and large meals</li>
        </ul>
        <div className="section-cta">
          <button className="cta-btn" onClick={goToDashboard}>
            Personalize this for me →
          </button>
        </div>
      </section>

      {/* HOW MOTILITYFLOW HELPS */}
      <section className="section">
        <h2>How MotilityFlow helps</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📊 See if food is still sitting</h3>
            <p>Understand whether digestion is still slowed</p>
          </div>
          <div className="feature-card">
            <h3>🔍 Learn when symptoms usually ease</h3>
            <p>Know when relief typically begins</p>
          </div>
          <div className="feature-card">
            <h3>📈 Know when it's safe to eat again</h3>
            <p>Avoid eating too early and worsening symptoms</p>
          </div>
          <div className="feature-card">
            <h3>🎯 Guidance for today</h3>
            <p>Simple suggestions based on where you are now</p>
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
            The ride can be wild — but you can conquer it. MotilityFlow is the tool I wish I had."
          </p>
          <p className="founder-signature">— Founder</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section cta-section">
        <h2>See what's going on inside your body</h2>
        <button className="cta-btn" onClick={goToDashboard}>
          Enter MotilityFlow →
        </button>
      </section>
    </div>
  );
}

export default LandingPageUrgent;

