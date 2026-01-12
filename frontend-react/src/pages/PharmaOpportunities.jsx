import './PharmaOpportunities.css';

function PharmaOpportunities() {
  return (
    <div className="pharma-opp">
      <header>
        <div className="wrap">
          <a href="/business" className="back-link">← Back to Business Plan</a>
          <div className="kicker">Business Plan • External Funding & Partnerships</div>
          <h1>Funding Landscape: Big GLP-1 + CGM Pharma & Device</h1>
          <p className="sub">
            A practical map of where money <span className="muted">(grants, pilots, collaborations, investments)</span> actually comes from at major GLP-1 and CGM organizations—and what's realistically reachable for a small digital health product.
          </p>

          <div className="legend">
            <span><span className="dot ok"></span>More accessible</span>
            <span><span className="dot warn"></span>Possible with clinician/IRB wrapper</span>
            <span><span className="dot bad"></span>Typically not "apply-online"</span>
          </div>
        </div>
      </header>

      <main>
        <div className="wrap">

          <section className="card">
            <h2>What Exists vs. What's Reachable <span className="pill">Reality Filter</span></h2>
            <div className="callout">
              <strong>Key takeaway:</strong> Big pharma rarely offers "open grants" to individuals for consumer apps. The common entry points are
              <strong> paid pilots</strong>, <strong>investigator-initiated studies</strong>, <strong>accelerators</strong>, or <strong>foundation/academic routes</strong>.
            </div>

            <table className="table" aria-label="Access paths">
              <thead>
                <tr>
                  <th style={{width: '28%'}}>Mechanism</th>
                  <th>What it looks like</th>
                  <th style={{width: '18%'}}>Best for</th>
                  <th style={{width: '18%'}}>Access</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Pilot / PoC</strong></td>
                  <td>Paid evaluation, limited cohort, defined outcomes, short timeline.</td>
                  <td>Digital companion, RWE insights</td>
                  <td><span className="score"><span className="dot ok"></span>Higher</span></td>
                </tr>
                <tr>
                  <td><strong>IIS / RWE Study</strong></td>
                  <td>Clinician PI + protocol + IRB; company may provide funding or support.</td>
                  <td>CGM analytics, tolerability studies</td>
                  <td><span className="score"><span className="dot warn"></span>Medium</span></td>
                </tr>
                <tr>
                  <td><strong>Accelerator</strong></td>
                  <td>Small funding, mentorship, warm intros to partners.</td>
                  <td>Early commercialization</td>
                  <td><span className="score"><span className="dot ok"></span>Higher</span></td>
                </tr>
                <tr>
                  <td><strong>Venture / Equity</strong></td>
                  <td>Investment, not a grant; expects scalable business.</td>
                  <td>Growth-stage product</td>
                  <td><span className="score"><span className="dot warn"></span>Medium</span></td>
                </tr>
                <tr>
                  <td><strong>Open "Grant Portal"</strong></td>
                  <td>Rare for GLP-1 + CGM, usually disease foundations/academia.</td>
                  <td>Academic research</td>
                  <td><span className="score"><span className="dot bad"></span>Low</span></td>
                </tr>
              </tbody>
            </table>
          </section>

          <div className="grid">

            <section className="card">
              <h2>Eli Lilly <span className="tag">GLP-1</span> <span className="pill">Mounjaro / Zepbound</span></h2>
              <div className="row">
                <span className="score"><span className="dot bad"></span>Direct grants: rare</span>
                <span className="score"><span className="dot warn"></span>Pilots: possible</span>
              </div>
              <div className="rule"></div>
              <div className="muted"><strong>What they fund (practically):</strong></div>
              <ul>
                <li><strong>Paid pilots</strong> that improve adherence, tolerability, outcomes documentation.</li>
                <li><strong>Real-world evidence</strong> collaborations when framed clinically.</li>
                <li><strong>Investments</strong> via venture arms (equity, not grants).</li>
              </ul>
              <div className="rule"></div>
              <div className="muted"><strong>Digital angles that fit:</strong></div>
              <ul>
                <li>Side-effect management (GI windows, constipation/diarrhea cycles)</li>
                <li>Patient-reported outcomes + behavior overlays</li>
                <li>"Drug + lifestyle" response modeling</li>
              </ul>
            </section>

            <section className="card">
              <h2>Novo Nordisk <span className="tag">GLP-1</span> <span className="pill">Ozempic / Wegovy</span></h2>
              <div className="row">
                <span className="score"><span className="dot warn"></span>Foundation route: strong</span>
                <span className="score"><span className="dot warn"></span>Collab: possible</span>
              </div>
              <div className="rule"></div>
              <div className="muted"><strong>What they fund (practically):</strong></div>
              <ul>
                <li><strong>Foundation-backed grants</strong> (often via academic/nonprofit wrapper).</li>
                <li><strong>Digital health collaborations</strong> in obesity/diabetes ecosystems.</li>
                <li>Behavior change and adherence programs with measurable outcomes.</li>
              </ul>
              <div className="rule"></div>
              <div className="muted"><strong>Digital angles that fit:</strong></div>
              <ul>
                <li>Obesity + metabolic response profiling</li>
                <li>Patient journey tooling; structured reintroduction plans</li>
                <li>RWE pipelines (CGM + symptoms + meds)</li>
              </ul>
            </section>

            <section className="card">
              <h2>Abbott <span className="tag">CGM</span> <span className="pill">FreeStyle Libre</span></h2>
              <div className="row">
                <span className="score"><span className="dot warn"></span>IIS/RWE: common</span>
                <span className="score"><span className="dot ok"></span>Analytics layer: strong fit</span>
              </div>
              <div className="rule"></div>
              <div className="muted"><strong>What they fund (practically):</strong></div>
              <ul>
                <li><strong>Investigator-initiated studies (IIS)</strong> + RWE collaborations.</li>
                <li>CGM analytics research (TIR, variability, behavior overlays).</li>
                <li>Post-market evidence programs (usage, outcomes, engagement).</li>
              </ul>
              <div className="rule"></div>
              <div className="muted"><strong>What they require (typically):</strong></div>
              <ul>
                <li>Clinician PI + protocol + IRB</li>
                <li>Observational framing (no device modification)</li>
              </ul>
            </section>

            <section className="card">
              <h2>Dexcom <span className="tag">CGM</span> <span className="pill">G6 / G7</span></h2>
              <div className="row">
                <span className="score"><span className="dot ok"></span>Developer posture: better</span>
                <span className="score"><span className="dot warn"></span>Cash grants: uncommon</span>
              </div>
              <div className="rule"></div>
              <div className="muted"><strong>What they offer (practically):</strong></div>
              <ul>
                <li>Developer platforms + partner ecosystems</li>
                <li>RWE partnerships for novel analytics / engagement tools</li>
                <li>Access + pilots + co-marketing more often than "grants"</li>
              </ul>
              <div className="rule"></div>
              <div className="muted"><strong>Good-fit angles:</strong></div>
              <ul>
                <li>Behavior overlays that reduce spikes / improve TIR</li>
                <li>Clinical dashboarding and reporting for workflows</li>
              </ul>
            </section>

            <section className="card">
              <h2>NIH / NIDDK (Public Funding) <span className="pill">Non-Pharma</span></h2>
              <div className="row">
                <span className="score"><span className="dot warn"></span>Big money, slow</span>
                <span className="score"><span className="dot warn"></span>Needs formal proposal</span>
              </div>
              <div className="rule"></div>
              <div className="muted"><strong>Mechanisms:</strong></div>
              <ul>
                <li>SBIR / STTR (small business innovation)</li>
                <li>R21 (exploratory) / R03 (small grant)</li>
              </ul>
              <div className="rule"></div>
              <div className="muted"><strong>Best fit when:</strong></div>
              <ul>
                <li>You can define a measurable biomarker/outcome</li>
                <li>You can recruit a clinical collaborator</li>
              </ul>
            </section>

            <section className="card">
              <h2>Accelerators (Practical Front Door) <span className="pill">Access Path</span></h2>
              <div className="row">
                <span className="score"><span className="dot ok"></span>Fast intros</span>
                <span className="score"><span className="dot ok"></span>Small funding</span>
              </div>
              <div className="rule"></div>
              <div className="muted"><strong>What you get:</strong></div>
              <ul>
                <li>Structured pilot packaging</li>
                <li>Warm introductions into pharma/device orgs</li>
                <li>Credibility + light capital</li>
              </ul>
              <div className="rule"></div>
              <div className="muted"><strong>What they want:</strong></div>
              <ul>
                <li>Clear use case + early traction</li>
                <li>Defined cohort and outcomes</li>
                <li>Regulatory-safe positioning</li>
              </ul>
            </section>

          </div>

          <section className="card" style={{marginTop: '14px'}}>
            <h2>What Does <em>Not</em> Exist (Important) <span className="pill">Avoid Wasted Time</span></h2>
            <ul>
              <li><strong>No</strong> broad "apply online" GLP-1 innovation grants for individuals building consumer apps.</li>
              <li><strong>No</strong> reliable access to raw CGM data streams without formal partnerships or approved integrations.</li>
              <li><strong>No</strong> pharma funding for "medical advice apps" without clinical framing and risk controls.</li>
            </ul>
          </section>

          <section className="card" style={{marginTop: '14px'}}>
            <h2>Best-Fit Framing (for a small digital product) <span className="pill">Pitch Language</span></h2>
            <div className="callout">
              <strong>Suggested framing:</strong>
              "Real-world GLP-1 tolerability, GI side-effect modeling, and CGM-based metabolic response profiling."
            </div>
            <ul>
              <li>Non-competitive: complements drugs and devices</li>
              <li>Measurable: ties to CGM metrics + symptom reports</li>
              <li>Regulatory safer: observational + coaching, not treatment</li>
            </ul>
          </section>

        </div>
      </main>

      <footer>
        <div className="wrap">
          <div><strong>Note:</strong> This page is a planning artifact (BP style). It's meant to guide outreach strategy and partnership packaging.</div>
          <div className="muted" style={{marginTop: '6px'}}>Next steps (not included here): MotilityFlow → pharma-ready pitch, 1-page concept note, internal org mapping.</div>
        </div>
      </footer>
    </div>
  );
}

export default PharmaOpportunities;

