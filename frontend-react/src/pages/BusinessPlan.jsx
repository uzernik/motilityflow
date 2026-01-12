import './BusinessPlan.css';

function BusinessPlan() {
  return (
    <div className="business-plan">
      <div className="business-plan__container">
        <h1>MotilityFlow</h1>
        <div className="business-plan__subtitle">
          Business Plan — January 7, 2026
        </div>

        <nav className="business-plan__nav">
          <a href="/business/market">Market Data →</a>
          <a href="/business/personal">Personal Story →</a>
          <a href="/business/product">Product →</a>
          <a href="/business/pharma">Pharma Opportunities →</a>
          <a href="/business/pharma-note">Pharma Note →</a>
        </nav>

        <details>
          <summary>1. Market Overview</summary>
          <ul>
            <li>GLP-1 + CGM market exceeds $100B annually</li>
            <li>Approximately 1 in 20 Americans is on GLP-1 therapy</li>
            <li>Major impact on longevity and quality of life</li>
            <li>Significant implications for national healthcare economics</li>
          </ul>
        </details>

        <details>
          <summary>2. Our Target Market: GLP-1 Dropouts</summary>
          <ul>
            <li>~20% of users discontinue due to adverse effects</li>
            <li>Represents ~$20B in annual lost value</li>
            <li>Primary driver: gastrointestinal side effects</li>
          </ul>
        </details>

        <details>
          <summary>3. Current GLP-1 Reality: No Scalable Dropout Solution</summary>
          <ul>
            <li>Endocrinologists lack bandwidth for GI management</li>
            <li>GI issues fall between specialties</li>
            <li>No tools for individualized, daily support</li>
          </ul>
        </details>

        <details>
          <summary>4. Our Solution: MotilityFlow</summary>
          <ul>
            <li>User: GLP-1 patients at risk of dropout</li>
            <li>Core pain: severe, unpredictable GI symptoms</li>
            <li>Platform: mobile-first</li>
            <li>Mode: always-on companion / coach</li>
          </ul>
        </details>

        <details>
          <summary>5. The Strategy: Partnering with Pharma</summary>
          <ul>
            <li>For them: Address a top cause of GLP-1 discontinuation</li>
            <li>For them: Reduce churn, increases therapy duration</li>
            <li>For us: Clear monetization via partnerships and licensing</li>
            <li>For both: R&amp;D and business development support</li>
          </ul>
        </details>

        <details>
          <summary>6. Next Steps</summary>
          <ul>
            <li>Continue product development</li>
            <li>Form initial team</li>
            <li>Secure funding and strategic partnerships</li>
          </ul>
        </details>

        <details>
          <summary>7. Team</summary>
          <ul>
            <li>CEO: Uri Zernik, PhD — AI / NLP</li>
            <li>Business Development: Pharma partnerships</li>
            <li>Chief Engineer: AI systems and prompting</li>
          </ul>
        </details>

        <details>
          <summary>8. Main Challenges</summary>
          <ul>
            <li>Recruiting beta users</li>
            <li>Early marketing and sales</li>
          </ul>
        </details>

        <details>
          <summary>9. Business Promise</summary>
          <ul>
            <li>Improved GLP-1 persistence</li>
            <li>Reduced adverse-effect-driven churn</li>
            <li>Accelerated pharma development and sales</li>
          </ul>
        </details>

        <details>
          <summary>10. Competitive Landscape</summary>
          <ul>
            <li>Levels Health — lifestyle + CGM</li>
            <li>January AI — metabolic prediction</li>
            <li>Livongo Health — diabetes-focused CGM</li>
          </ul>
        </details>

        <div className="business-plan__footer">
          © 2026 MotilityFlow
        </div>
      </div>
    </div>
  );
}

export default BusinessPlan;

