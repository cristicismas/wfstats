import React, { useState } from 'react';
import CYCLES from 'constants/cycles';
import { capitalize } from 'utils/strings';
import { getFormattedTimeArray, minusOneSecond } from 'utils/cycles';
import useInterval from 'hooks/useInterval';

const WorldCycle = ({ world = {} }) => {
  const [timeLeft, setTimeLeft] = useState(getFormattedTimeArray(world.timeLeft));

  let [hours, minutes, seconds] = timeLeft;

  useInterval(() => {
    setTimeLeft(minusOneSecond(hours, minutes, seconds));
  }, 1000);

  const getOtherCycle = () => {
    let currentCycle = world.state;

    if (CYCLES[world.name].cycles[0] === currentCycle) return CYCLES[world.name].cycles[1];
    else return CYCLES[world.name].cycles[0];
  };

  return (
    <div className={`world-cycle ${world.name}`}>
      <h3 className="world-name">{capitalize(world.name)}</h3>

      <h4 className="current-state">
        It is currently: <div className="accent">{world.state}</div>
      </h4>

      <h4 className="time-left">
        Time until <div className="accent">{getOtherCycle()}</div>:{' '}
        <div className="accent">{`${hours} ${minutes} ${seconds}`}</div>
      </h4>
    </div>
  );
};

export default WorldCycle;
