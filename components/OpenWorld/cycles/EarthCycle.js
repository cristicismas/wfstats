import React from 'react';

const EarthCycle = ({ cycle={} }) => {
  return (
    <div className="world-cycle">
      <h3 className="world-name">Earth</h3>

      <h4 className="current-state">
        It is currently: <div className="accent">{cycle.state}</div>
      </h4>

      <h4 className="time-left">
        Time until <div className="accent">{cycle.isDay ? 'night' : 'day'}</div>:{' '}
        <div className="accent">{cycle.timeLeft}</div>
      </h4>
    </div>
  );
};

export default EarthCycle;
