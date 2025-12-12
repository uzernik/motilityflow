import './CGMGraph.css';

// Placeholder dummy data
const glucoseData = [
  { time: 0, value: 95 },
  { time: 1, value: 102 },
  { time: 2, value: 145 },
  { time: 3, value: 168 },
  { time: 4, value: 152 },
  { time: 5, value: 128 },
  { time: 6, value: 115 },
  { time: 7, value: 108 },
  { time: 8, value: 98 },
  { time: 9, value: 92 },
  { time: 10, value: 88 },
  { time: 11, value: 105 },
  { time: 12, value: 142 },
  { time: 13, value: 165 },
  { time: 14, value: 148 },
  { time: 15, value: 125 },
  { time: 16, value: 110 },
  { time: 17, value: 95 },
  { time: 18, value: 118 },
  { time: 19, value: 155 },
  { time: 20, value: 138 },
  { time: 21, value: 112 },
  { time: 22, value: 98 },
  { time: 23, value: 90 },
];

const stackingWindow = { start: 14, end: 20 }; // Hours when stacking risk is high

const symptoms = [
  { time: 4, type: 'burping' },
  { time: 15, type: 'burping' },
  { time: 20, type: 'burping' },
];

const exercisePeriods = [
  { start: 7, end: 8, type: 'walking' },
  { start: 17, end: 18, type: 'walking' },
];

function CGMGraph() {
  const width = 800;
  const height = 280;
  const padding = { top: 40, right: 30, bottom: 50, left: 50 };
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  // Scale functions
  const xScale = (time) => padding.left + (time / 23) * graphWidth;
  const yScale = (value) => {
    const minVal = 60;
    const maxVal = 200;
    return padding.top + graphHeight - ((value - minVal) / (maxVal - minVal)) * graphHeight;
  };

  // Generate path for glucose line
  const linePath = glucoseData
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(d.time)} ${yScale(d.value)}`)
    .join(' ');

  // Generate area path for glucose (for gradient fill below line)
  const areaPath = `${linePath} L ${xScale(23)} ${padding.top + graphHeight} L ${xScale(0)} ${padding.top + graphHeight} Z`;

  return (
    <div className="cgm-graph">
      <h3 className="graph-title">CGM Glucose Trend (24h)</h3>
      <svg viewBox={`0 0 ${width} ${height}`} className="cgm-svg">
        <defs>
          {/* Gradient for glucose area */}
          <linearGradient id="glucoseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.02" />
          </linearGradient>
          {/* Gradient for stacking window */}
          <linearGradient id="stackingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[80, 100, 120, 140, 160, 180].map((val) => (
          <g key={val}>
            <line
              x1={padding.left}
              y1={yScale(val)}
              x2={width - padding.right}
              y2={yScale(val)}
              className="grid-line"
            />
            <text x={padding.left - 8} y={yScale(val)} className="axis-label y-label">
              {val}
            </text>
          </g>
        ))}

        {/* Time axis labels */}
        {[0, 4, 8, 12, 16, 20, 23].map((hour) => (
          <text key={hour} x={xScale(hour)} y={height - 15} className="axis-label x-label">
            {hour}:00
          </text>
        ))}

        {/* Stacking window band */}
        <rect
          x={xScale(stackingWindow.start)}
          y={padding.top}
          width={xScale(stackingWindow.end) - xScale(stackingWindow.start)}
          height={graphHeight}
          fill="url(#stackingGradient)"
          className="stacking-band"
        />
        <text
          x={xScale((stackingWindow.start + stackingWindow.end) / 2)}
          y={padding.top + 20}
          className="stacking-label"
        >
          Stacking Window
        </text>

        {/* Exercise overlays */}
        {exercisePeriods.map((period, i) => (
          <g key={i} className="exercise-overlay">
            <rect
              x={xScale(period.start)}
              y={padding.top}
              width={xScale(period.end) - xScale(period.start)}
              height={graphHeight}
              fill="#34d399"
              opacity="0.12"
            />
            <text
              x={xScale((period.start + period.end) / 2)}
              y={height - padding.bottom + 30}
              className="exercise-label"
            >
              🚶
            </text>
          </g>
        ))}

        {/* Glucose area fill */}
        <path d={areaPath} fill="url(#glucoseGradient)" />

        {/* Glucose line */}
        <path d={linePath} className="glucose-line" />

        {/* Data points */}
        {glucoseData.map((d, i) => (
          <circle
            key={i}
            cx={xScale(d.time)}
            cy={yScale(d.value)}
            r="3"
            className="glucose-point"
          />
        ))}

        {/* Symptom markers */}
        {symptoms.map((s, i) => {
          const glucoseAtTime = glucoseData.find((d) => d.time === s.time)?.value || 120;
          return (
            <g key={i} className="symptom-marker">
              <circle
                cx={xScale(s.time)}
                cy={yScale(glucoseAtTime) - 18}
                r="10"
                className="symptom-circle"
              />
              <text
                x={xScale(s.time)}
                y={yScale(glucoseAtTime) - 14}
                className="symptom-icon"
              >
                💨
              </text>
            </g>
          );
        })}

        {/* Axis lines */}
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={height - padding.bottom}
          className="axis-line"
        />
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={width - padding.right}
          y2={height - padding.bottom}
          className="axis-line"
        />

        {/* Y-axis title */}
        <text
          x={15}
          y={height / 2}
          className="axis-title"
          transform={`rotate(-90, 15, ${height / 2})`}
        >
          mg/dL
        </text>
      </svg>

      <div className="cgm-legend">
        <span className="legend-item">
          <span className="legend-dot glucose"></span> Glucose
        </span>
        <span className="legend-item">
          <span className="legend-dot stacking"></span> Stacking Window
        </span>
        <span className="legend-item">
          <span className="legend-dot exercise"></span> Walking
        </span>
        <span className="legend-item">💨 Burping</span>
      </div>
    </div>
  );
}

export default CGMGraph;

