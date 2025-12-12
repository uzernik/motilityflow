import './MotilityCard.css';

function MotilityCard({ data, loading, error }) {
  if (loading) {
    return <div className="motility-card loading">Loading...</div>;
  }

  if (error) {
    return <div className="motility-card error">Error: {error}</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="motility-card">
      <div className="card-row">
        <span className="label">Day</span>
        <span className="value">{data.day}</span>
      </div>
      <div className="card-row">
        <span className="label">Motility</span>
        <span className="value motility-status">{data.motility}</span>
      </div>
      <div className="card-row">
        <span className="label">Stacking</span>
        <span className="value">{data.stacking}</span>
      </div>
    </div>
  );
}

export default MotilityCard;


