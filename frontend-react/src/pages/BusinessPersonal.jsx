import './BusinessPersonal.css';

function BusinessPersonal() {
  return (
    <div className="personal-story-page">
      <a href="/business" className="back-link">← Back to Business Plan</a>

      <h1>My Personal Story</h1>

      <section>
        <h2>Background</h2>
        <p>
          I was diagnosed with Type 2 diabetes more than thirty years ago.
          About a year ago, my endocrinologist prescribed Mounjaro (2.5 mg).
          The dose had only modest impact—but no side effects.
        </p>
        <p>
          Six months later, the dose was increased to 5 mg. That's when everything
          turned upside down. I developed severe gastrointestinal symptoms.  Twice  ended up in the
          emergency room. Both times it was midnight Sunday for anepisode that started Saturday 3am.  
        </p>
        <p>
          The message from the medical team was blunt:
          <em>"You're sensitive to GLP-1 drugs. This isn't for you. Stop the medication."</em>
        </p>
        <p>
          I refused. The long-term health benefits of GLP-1 therapy—metabolic health,
          cardiovascular protection, longevity—were simply too important to abandon.
        </p>
        <p>
          Over the past four months, I began using AI as a daily companion and coach
          to manage side effects rather than quit treatment.
        </p>
        <p>
          The results have been dramatic:
        </p>
        <ul>
          <li>25 lbs of weight loss</li>
          <li>Average glucose improved from 135 (Diabetes) to 102 (Normal)</li>
          <li>Side effects brought under control</li>
        </ul>
      </section>

      <section>
        <h2>The Problems I Faced</h2>
        <p>
          The side effects weren't mild inconveniences. They were disruptive and
          overwhelming:
        </p>
        <ul>
          <li>Constant, foul-smelling burping</li>
          <li>Sudden, forceful vomiting</li>
          <li>Diarrhea during one part of the weekly cycle</li>
          <li>Severe constipation during another</li>
          <li>Rapid and unintended weight loss</li>
        </ul>
        <p>
          This is exactly the point where many patients quit.
        </p>
      </section>

      <section>
        <h2>How AI Made the Difference</h2>

        <h3>Timeline Awareness</h3>
        <p>
          AI tracked the context continuously:
        </p>
        <blockquote>
          "You injected two days ago. Last night you sat down for a "social meal".
          You ate "offensive food": salad with onion and garlic.
          Symptoms started thirty minutes ago."
        </blockquote>

        <h3>Simple, Practical Guidance</h3>
        <ul>
          <li>Avoid solid foods for the next 2–3 hours</li>
          <li>Shift injection timing by 24 hours: not before a "social meal"</li>
          <li>Remove specific trigger foods during vulnerable cycle windows</li>
        </ul>

        <h3>Provide Basic Physiological Insight</h3>
        What is:
        <ul>
          <li>Gut motility</li>
          <li>Food "stacking"?</li>
          <li>GLP-1 weekly cycle</li>
          <li>Stomach vs. colon behavior and symptoms</li>
          <li>Interactions with daily life events</li>
        </ul>

        <h3>Provide Ongoing Support</h3>
        <ul>
          <li>Gentle follow-ups ("Would you like to share your CGM readings?")</li>
          <li>Guidance on OTC medications when appropriate</li>
          <li>Consistent encouragement</li>
        </ul>
      </section>

      <section>
        <h2>Why This Matters</h2>
        <p>
          I'm not unique. Millions of people are prescribed GLP-1 therapies—and
          roughly 20% discontinue because no one helps them manage what happens
          between doctor visits.
        </p>
        <p>
          My experience is the reason MotilityFlow exists.
        </p>
      </section>

      <div className="personal-story-footer">
        © 2026 MotilityFlow
      </div>
    </div>
  );
}

export default BusinessPersonal;

