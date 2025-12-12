import './MotilityGraph.css';

// Placeholder dummy data - 7 days of motility data
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Natural cycle (baseline without interventions) - scale 1-10
const naturalCycle = [3, 2, 4, 6, 8, 7, 5];

// Adjusted by behaviors (after walking, hydration, etc.)
const adjustedCycle = [5, 4, 6, 7, 9, 8, 6];

// Days where motility is slow (value < 5)
const slowDays = [0, 1]; // Monday, Tuesday

function MotilityGraph() {
  const width = 360;
  const height = 200;
  const padding = { top: 30, right: 20, bottom: 40, left: 40 };
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  // Scale functions
  const xScale = (day) => padding.left + (day / 6) * graphWidth;
  const yScale = (value) => padding.top + graphHeight - ((value - 1) / 9) * graphHeight;

  // Generate paths
  const naturalPath = naturalCycle
    .map((val, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(val)}`)
    .join(' ');

  const adjustedPath = adjustedCycle
    .map((val, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(val)}`)
    .join(' ');

  return (
    <div className="motility-graph">
      <h3 className="graph-title">7-Day Motility Cycle</h3>
      <svg viewBox={`0 0 ${width} ${height}`} className="motility-svg">
        <defs>
          <linearGradient id="slowDayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[2, 4, 6, 8, 10].map((val) => (
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

        {/* Slow motility day shading */}
        {slowDays.map((dayIndex) => {
          const dayWidth = graphWidth / 6;
          return (
            <rect
              key={dayIndex}
              x={xScale(dayIndex) - dayWidth / 2}
              y={padding.top}
              width={dayWidth}
              height={graphHeight}
              fill="url(#slowDayGradient)"
              className="slow-day-band"
            />
          );
        })}

        {/* Natural cycle line */}
        <path d={naturalPath} className="natural-line" />

        {/* Adjusted cycle line */}
        <path d={adjustedPath} className="adjusted-line" />

        {/* Natural cycle points */}
        {naturalCycle.map((val, i) => (
          <circle
            key={`natural-${i}`}
            cx={xScale(i)}
            cy={yScale(val)}
            r="4"
            className="natural-point"
          />
        ))}

        {/* Adjusted cycle points */}
        {adjustedCycle.map((val, i) => (
          <circle
            key={`adjusted-${i}`}
            cx={xScale(i)}
            cy={yScale(val)}
            r="4"
            className="adjusted-point"
          />
        ))}

        {/* Day labels */}
        {days.map((day, i) => (
          <text key={day} x={xScale(i)} y={height - 12} className="axis-label x-label">
            {day}
          </text>
        ))}

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
      </svg>

      <div className="motility-legend">
        <span className="legend-item">
          <span className="legend-line natural"></span> Natural
        </span>
        <span className="legend-item">
          <span className="legend-line adjusted"></span> Adjusted
        </span>
        <span className="legend-item">
          <span className="legend-dot slow"></span> Slow Days
        </span>
      </div>
    </div>
  );
}

export default MotilityGraph;

