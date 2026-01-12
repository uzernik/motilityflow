import './BusinessMarket.css';

function BusinessMarket() {
  return (
    <div className="business-market">
      <div className="business-market__container">
        <h1>Market Data</h1>
        <a href="/business" className="back-link">← Back to Business Plan</a>

        {/* ================= GLP-1 MARKET ================= */}
        <section>
          <h2>GLP-1 Market</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Medication</th>
                  <th>Company</th>
                  <th>2024 Rev ($B)</th>
                  <th>2025 Rev ($B)</th>
                  <th>2026 Rev ($B)</th>
                  <th>2024 Patients (M)</th>
                  <th>2025 Est. Patients (M)</th>
                  <th>2026 Est. Patients (M)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ozempic</td>
                  <td>NOR</td>
                  <td>17.4</td>
                  <td>20–22</td>
                  <td>22–24</td>
                  <td>8.5–9.0</td>
                  <td>9.5–10.5</td>
                  <td>10.0–11.0</td>
                </tr>
                <tr>
                  <td>Wegovy</td>
                  <td>NOR</td>
                  <td>8.4</td>
                  <td>13–15</td>
                  <td>17–20</td>
                  <td>1.2–1.4</td>
                  <td>2.2–2.8</td>
                  <td>3.0–3.8</td>
                </tr>
                <tr>
                  <td>Rybelsus</td>
                  <td>NOR</td>
                  <td>3.4</td>
                  <td>4.0–4.5</td>
                  <td>4.5–5.0</td>
                  <td>2.5–3.0</td>
                  <td>3.0–3.5</td>
                  <td>3.3–3.8</td>
                </tr>
                <tr>
                  <td>Mounjaro</td>
                  <td>LLY</td>
                  <td>11.5</td>
                  <td>18–22</td>
                  <td>24–30</td>
                  <td>2.2–2.6</td>
                  <td>3.5–4.5</td>
                  <td>5.0–6.0</td>
                </tr>
                <tr>
                  <td>Zepbound</td>
                  <td>LLY</td>
                  <td>4.9</td>
                  <td>12–15</td>
                  <td>18–22</td>
                  <td>0.6–0.8</td>
                  <td>1.8–2.4</td>
                  <td>3.0–3.8</td>
                </tr>
                <tr>
                  <td>Trulicity</td>
                  <td>LLY</td>
                  <td>5.3</td>
                  <td>3–4</td>
                  <td>2–3</td>
                  <td>4.0–4.5</td>
                  <td>2.5–3.0</td>
                  <td>1.8–2.2</td>
                </tr>
                <tr className="total-row">
                  <td><strong>TOTAL</strong></td>
                  <td>—</td>
                  <td><strong>50.9</strong></td>
                  <td><strong>70–82</strong></td>
                  <td><strong>88–104</strong></td>
                  <td><strong>19.0–21.3</strong></td>
                  <td><strong>22.5–26.7</strong></td>
                  <td><strong>26.1–30.6</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= CGM MARKET ================= */}
        <section>
          <h2>CGM Market</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>CGM Product / Platform</th>
                  <th>Company</th>
                  <th>2024 Rev ($B)</th>
                  <th>2025 Rev ($B)</th>
                  <th>2026 Rev ($B)</th>
                  <th>2024 Patients (M)</th>
                  <th>2025 Patients (M)</th>
                  <th>2026 Patients (M)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FreeStyle Libre</td>
                  <td>Abbott</td>
                  <td>6.8</td>
                  <td>8.6</td>
                  <td>10.4</td>
                  <td>7.0</td>
                  <td>8.25</td>
                  <td>9.5</td>
                </tr>
                <tr>
                  <td>Dexcom G</td>
                  <td>Dexcom</td>
                  <td>4.02</td>
                  <td>4.8</td>
                  <td>5.55</td>
                  <td>4.5</td>
                  <td>5.25</td>
                  <td>5.75</td>
                </tr>
                <tr>
                  <td>Medtronic CGM</td>
                  <td>Medtronic</td>
                  <td>0.5</td>
                  <td>0.65</td>
                  <td>0.85</td>
                  <td>0.6</td>
                  <td>0.75</td>
                  <td>0.85</td>
                </tr>
                <tr>
                  <td>Other CGMs</td>
                  <td>Various</td>
                  <td>0.3</td>
                  <td>0.4</td>
                  <td>0.5</td>
                  <td>0.4</td>
                  <td>0.5</td>
                  <td>0.6</td>
                </tr>
                <tr className="total-row">
                  <td><strong>TOTAL</strong></td>
                  <td>—</td>
                  <td><strong>11.6</strong></td>
                  <td><strong>14.45</strong></td>
                  <td><strong>17.3</strong></td>
                  <td><strong>12.5</strong></td>
                  <td><strong>14.75</strong></td>
                  <td><strong>16.7</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="business-market__footer">
          © 2026 MotilityFlow
        </div>
      </div>
    </div>
  );
}

export default BusinessMarket;

