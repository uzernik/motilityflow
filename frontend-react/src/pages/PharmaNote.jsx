import './PharmaNote.css';

function PharmaNote() {
  return (
    <div className="pharma-note">
      <header>
        <div className="wrap">
          <a href="/business" className="back-link">← Back to Business Plan</a>
          <div className="kicker">Concept Note · Real-World Evidence</div>
          <h1>Real-World GLP-1 Tolerability & CGM-Linked Metabolic Response Profiling</h1>
          <p className="muted">
            MotilityFlow — Digital observational platform for GLP-1 + CGM real-world insight
          </p>
        </div>
      </header>

      <main>
        <div className="wrap">
          <div className="card">

            <h2>1. Problem Statement</h2>
            <p>
              GLP-1 therapies deliver strong glycemic and weight-loss benefits, yet real-world
              tolerability and long-term adherence remain suboptimal. The primary drivers are:
            </p>
            <ul>
              <li>GI side effects (nausea, vomiting, diarrhea, constipation)</li>
              <li>Poor understanding of time-dependent vulnerability windows (e.g., Days 2–3 post-dose)</li>
              <li>Lack of integrated insight linking CGM data, symptoms, diet, and activity</li>
            </ul>
            <p>
              Current real-world evidence focuses on outcomes, not on the lived, day-to-day
              physiological experience that drives discontinuation and dose intolerance.
            </p>

            <h2>2. Proposed Solution</h2>
            <p>
              <strong>MotilityFlow</strong> is a digital, non-interventional platform that models
              GLP-1 response at a daily and intraday level by integrating:
            </p>
            <ul>
              <li>CGM-derived metrics (average glucose, variability, time-in-range)</li>
              <li>Patient-reported GI symptoms and bowel patterns</li>
              <li>Meal timing and coarse composition categories</li>
              <li>Physical activity and recovery windows</li>
            </ul>
            <p>
              The platform generates real-world response profiles that explain why patients
              struggle, not merely that they do.
            </p>

            <h2>3. Innovation & Differentiation</h2>
            <ul>
              <li>Identification of predictable post-dose vulnerability windows</li>
              <li>Distinction between short glycemic excursions and true glycemic burden</li>
              <li>Modeling of constipation and diarrhea as motility phenomena</li>
              <li>Within-patient comparisons across dose, timing, and behavior</li>
            </ul>

            <h2>4. Partner Use Cases</h2>
            <p><strong>GLP-1 Pharma (e.g., Novo Nordisk)</strong></p>
            <ul>
              <li>Tolerability profiling by dose and timing</li>
              <li>Evidence supporting patient education and persistence</li>
              <li>Drug + behavior real-world narratives</li>
            </ul>

            <p><strong>CGM Device Companies (e.g., Abbott)</strong></p>
            <ul>
              <li>Advanced CGM analytics beyond standard time-in-range</li>
              <li>Behavioral overlays that contextualize glucose patterns</li>
              <li>Observational studies using CGM data without device modification</li>
            </ul>

            <h2>5. Pilot / Study Design (Illustrative)</h2>
            <ul>
              <li><strong>Design:</strong> Observational, non-interventional</li>
              <li><strong>Cohort:</strong> Adults on stable GLP-1 therapy using CGM</li>
              <li><strong>Duration:</strong> 8–12 weeks</li>
              <li><strong>Outputs:</strong> Tolerability maps, CGM-symptom correlations, persistence indicators</li>
            </ul>

            <h2>6. Regulatory & Compliance Positioning</h2>
            <ul>
              <li>Observational and coaching-oriented</li>
              <li>No diagnostic or therapeutic claims</li>
              <li>No modification of drug or device</li>
              <li>Suitable for IIS or RWE collaboration frameworks</li>
            </ul>

            <h2>7. Value Proposition</h2>
            <p><strong>For Partners</strong></p>
            <ul>
              <li>Deeper understanding of real-world patient experience</li>
              <li>Improved persistence and satisfaction</li>
              <li>Evidence-based patient support strategies</li>
            </ul>

            <p><strong>For Patients</strong></p>
            <ul>
              <li>Fewer discontinuations</li>
              <li>Improved symptom anticipation and self-management</li>
              <li>Higher quality of life without medication escalation</li>
            </ul>

            <div className="callout">
              <strong>Next Step:</strong> Explore a small, focused pilot or RWE collaboration
              to validate feasibility and partner-specific value.
            </div>

          </div>
        </div>
      </main>

      <footer>
        <div className="wrap">
          MotilityFlow · Concept Note · Non-confidential · For exploratory discussion only
        </div>
      </footer>
    </div>
  );
}

export default PharmaNote;

