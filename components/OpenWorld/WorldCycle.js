import React from 'react';
import CYCLES from 'constants/cycles';
import { capitalize } from 'utils/strings';

const WorldCycle = ({ world={} }) => {
  const getOtherCycle = () => {
    let currentCycle = world.state;

    if (CYCLES[world.name].cycles[0] === currentCycle)
      return CYCLES[world.name].cycles[1]
    else
      return CYCLES[world.name].cycles[0]
  }

  return (
    <div className="world-cycle">
      <h3 className="world-name">{capitalize(world.name)}</h3>

      <h4 className="current-state">
        It is currently: <div className="accent">{world.state}</div>
      </h4>

      <h4 className="time-left">
        Time until <div className="accent">{getOtherCycle()}</div>:{' '}
        <div className="accent">{world.timeLeft}</div>
      </h4>
    </div>
  );
};

export default WorldCycle;
