import './ProductPage.css';

function ProductPage() {
  return (
    <div className="product-page">
      <a href="/business" className="back-link">← Back to Business Plan</a>

      <h1>The Product</h1>

      <h2>1. Objective</h2>
      <p>
        Support a GLP-1 user who is suffering an adverse gastrointestinal (GI) reaction, reduce premature
        drop-out, and help the user regain control, understanding, and confidence.
      </p>

      <h2>2. Three Stages</h2>

      <h3>Stage I — Drop-out Risk</h3>
      <p>
        The user is close to stopping the medication.
      </p>
      <ul>
        <li>Grab attention quickly</li>
        <li>Show understanding and sympathy</li>
        <li>Offer minimal, peer-level guidance (not explanations)</li>
      </ul>

      <h3>Stage II — Coaching / Understanding</h3>
      <p>
        The user is open to learning what is happening.
      </p>
      <ul>
        <li>Explain the situation in plain terms: a powerful weekly medication, slowed digestion, uneven gut response</li>
        <li>Introduce simple behaviors: keep moving, hydrate, smaller meals, food avoidance</li>
        <li>Tune explanation depth to the user's education level and readiness</li>
      </ul>

      <h3>Stage III — Long-Term Personalization</h3>
      <p>
        The user faces ongoing, individual tradeoffs.
      </p>
      <ul>
        <li>Optimize blood-glucose reduction vs. weight loss vs. GI tolerance</li>
        <li>Customize diet, activity, and routines over time</li>
      </ul>

      <h2>3. The Keys</h2>
      <ul>
        <li><strong>Insight:</strong> Weekly cycle — ~3 days of slow digestion, ~4 days of more normal digestion</li>
        <li><strong>Encouragement:</strong> Gentle movement (e.g., walking) even when energy is low</li>
        <li><strong>Statistics:</strong> ~85% of users with similar symptoms report that walking helps</li>
      </ul>

      <h2>4. The User Challenge</h2>
      <ul>
        <li>Topic is sensitive and awkward:
          <ul>
            <li>Bowel movements and stool images</li>
            <li>Burp odor, gas, bloating</li>
          </ul>
        </li>
        <li>User needs to enter:
          <ul>
            <li>CGM data</li>
            <li>Bowel photos</li>
          </ul>
        </li>
        <li>Concepts are technical; explanations must be tuned to the user's education level</li>
      </ul>

      <h2>5. The Technical Challenge</h2>

      <h3>Backend</h3>
      <ul>
        <li>Dynamically adjust AI tone, vocabulary, and depth as the user moves between stages</li>
        <li>Avoid overwhelming, medicalized, or dismissive responses</li>
      </ul>

      <h3>Frontend</h3>
      <ul>
        <li>Evolve the dashboard as user understanding grows</li>
        <li>Shift from reassurance → explanation → optimization without friction</li>
      </ul>

      <div className="product-page__footer">
        © 2026 MotilityFlow
      </div>
    </div>
  );
}

export default ProductPage;

