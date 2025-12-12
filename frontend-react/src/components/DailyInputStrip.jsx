import './DailyInputStrip.css';

// Placeholder dummy data for today's inputs
const dailyData = {
  meals: { count: 3, status: 'good' },      // 3 balanced meals
  walking: { minutes: 25, status: 'mid' },   // 25 min (goal: 30)
  hydration: { glasses: 6, status: 'mid' },  // 6 glasses (goal: 8)
  sleep: { hours: 7.5, status: 'good' },     // 7.5 hours
  bm: { count: 1, status: 'good' },          // 1 bowel movement
  symptoms: { count: 2, status: 'bad' },     // 2 symptom episodes
};

const statusColors = {
  good: '#34d399',
  mid: '#f59e0b',
  bad: '#ef4444',
};

const statusBg = {
  good: 'rgba(52, 211, 153, 0.15)',
  mid: 'rgba(245, 158, 11, 0.15)',
  bad: 'rgba(239, 68, 68, 0.15)',
};

function DailyInputStrip() {
  const items = [
    {
      key: 'meals',
      icon: '🍽️',
      label: 'Meals',
      value: dailyData.meals.count,
      status: dailyData.meals.status,
    },
    {
      key: 'walking',
      icon: '🚶',
      label: 'Walk',
      value: `${dailyData.walking.minutes}m`,
      status: dailyData.walking.status,
    },
    {
      key: 'hydration',
      icon: '💧',
      label: 'Water',
      value: dailyData.hydration.glasses,
      status: dailyData.hydration.status,
    },
    {
      key: 'sleep',
      icon: '😴',
      label: 'Sleep',
      value: `${dailyData.sleep.hours}h`,
      status: dailyData.sleep.status,
    },
    {
      key: 'bm',
      icon: '🚽',
      label: 'BM',
      value: dailyData.bm.count,
      status: dailyData.bm.status,
    },
    {
      key: 'symptoms',
      icon: '⚠️',
      label: 'Symptoms',
      value: dailyData.symptoms.count,
      status: dailyData.symptoms.status,
    },
  ];

  return (
    <div className="daily-input-strip">
      <h3 className="strip-title">Today's Inputs</h3>
      <div className="strip-container">
        {items.map((item) => (
          <div
            key={item.key}
            className="strip-item"
            style={{
              borderColor: statusColors[item.status],
              backgroundColor: statusBg[item.status],
            }}
          >
            <span className="strip-icon">{item.icon}</span>
            <span className="strip-value" style={{ color: statusColors[item.status] }}>
              {item.value}
            </span>
            <span className="strip-label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="strip-legend">
        <span className="legend-item">
          <span className="legend-dot" style={{ background: statusColors.good }}></span> Good
        </span>
        <span className="legend-item">
          <span className="legend-dot" style={{ background: statusColors.mid }}></span> Mid
        </span>
        <span className="legend-item">
          <span className="legend-dot" style={{ background: statusColors.bad }}></span> Bad
        </span>
      </div>
    </div>
  );
}

export default DailyInputStrip;

