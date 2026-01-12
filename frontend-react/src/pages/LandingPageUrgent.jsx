import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function ExpandableItem({ text, explanation }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className="expandable-item">
      <div className="item-main">
        <span>{text}</span>
        <button 
          className="explain-trigger" 
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? 'Got it' : 'Why?'}
        </button>
      </div>
      {expanded && (
        <p className="item-explanation">{explanation}</p>
      )}
    </li>
  );
}

function LandingPageUrgent() {
  const navigate = useNavigate();

  const goToEntry = () => navigate('/entry');
  const goToDashboard = () => navigate('/dashboard');

  const happeningItems = [
    {
      text: "Food is sitting in your stomach longer than usual",
      explanation: "GLP-1 medications slow how fast the stomach empties. When food stays longer than usual, it can create nausea, bloating, and pressure. This is very common, especially after injections or dose changes."
    },
    {
      text: "You can't tell if it's better to eat or wait",
      explanation: "When digestion is slowed, eating too soon can make symptoms worse. Waiting too long can leave you feeling weak. Without guidance, it's genuinely hard to know which choice will help."
    },
    {
      text: "Guessing often makes symptoms worse",
      explanation: "Many people try random foods, supplements, or remedies. Some help, many don't. Trial and error often adds discomfort instead of relieving it."
    }
  ];

  const helpsItems = [
    {
      text: "Pause eating for a bit",
      explanation: "Giving your stomach time to empty can reduce pressure and nausea. For many people, this is the fastest way to feel some relief."
    },
    {
      text: "Gentle walking (10–20 minutes)",
      explanation: "Light movement can help stimulate digestion without stressing your body. Intense exercise often makes symptoms worse."
    },
    {
      text: "Liquids or soft foods only",
      explanation: "Liquids and soft foods move through the stomach more easily and are less likely to sit there and cause discomfort."
    },
    {
      text: "Avoid fats and large meals",
      explanation: "Fat slows digestion even more. Large meals take longer to clear and often make nausea and bloating worse."
    }
  ];

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
          GLP-1 drugs can slow digestion — sometimes food just doesn't move.
        </p>
        <button className="cta-btn" onClick={goToEntry}>
          Get help now →
        </button>
        <p className="hero-helper">Takes under a minute. No signup.</p>
      </section>

      <p className="section-transition">Here's what's likely happening — and why you're feeling this way.</p>

      {/* WHAT'S HAPPENING RIGHT NOW */}
      <section className="section">
        <h2>What's happening right now</h2>
        <ul className="bullets">
          {happeningItems.map((item, index) => (
            <ExpandableItem key={index} text={item.text} explanation={item.explanation} />
          ))}
        </ul>
      </section>

      {/* WHAT HELPS RIGHT NOW */}
      <section className="section">
        <h2>What helps right now</h2>
        <ul className="bullets">
          {helpsItems.map((item, index) => (
            <ExpandableItem key={index} text={item.text} explanation={item.explanation} />
          ))}
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

      {/* FOOTER */}
      <footer className="landing-footer">
        <span>© 2026 MotilityFlow</span>
        <a href="/business" className="footer-link">Business Plan</a>
      </footer>
    </div>
  );
}

export default LandingPageUrgent;

