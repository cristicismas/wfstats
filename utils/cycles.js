import apiCall from './api';
import WORLDS from 'constants/cycles';

export const getWorldStates = async () => {
  let worldStates = await formatWorldStates();
  return worldStates;
};

export const getFormattedTimeArray = currentTime => {
  currentTime = currentTime.trim().split(' ');
  let [hours, minutes, seconds] = ['0h', '0m', '0s'];

  if (currentTime) {
    switch (currentTime.length) {
      case 1:
        [seconds] = currentTime;
        break;
      case 2:
        [minutes, seconds] = currentTime;
        break;
      case 3:
        [hours, minutes, seconds] = currentTime;
        break;
      default:
        throw new Error('Time length must be 1, 2, or 3');
    }

    return [hours, minutes, seconds];
  }
};

export const minusOneSecond = (hours, minutes, seconds) => {
  let secondsNumber = seconds.slice(0, -1);
  let minutesNumber = minutes.slice(0, -1);
  let hoursNumber = hours.slice(0, -1);

  if (seconds[0] > 0) {
    seconds = secondsNumber - 1 + 's';
  } else if (minutesNumber > 0) {
    minutes = minutesNumber - 1 + 'm';
    seconds = '59s';
  } else if (hoursNumber > 0) {
    hours = hoursNumber - 1 + 'h';
    minutes = '59m';
    seconds = '59s';
  }

  return [hours, minutes, seconds];
};

const getCambionTime = cycle => {
  const currentTime = new Date();
  const timeDifference = new Date(new Date(cycle.expiry) - currentTime);
  return `${timeDifference.getUTCHours()}h ${timeDifference.getUTCMinutes()}m ${timeDifference.getUTCSeconds()}s`;
};

const formatWorldStates = async () => {
  const worldCycles = await fetchWorldCyclesData();

  return worldCycles.map((cycle, index) => {
    const worldName = Object.keys(WORLDS)[index];

    let timeLeft = worldName === 'cambion' ? getCambionTime(cycle) : cycle.timeLeft;

    const currentState = worldName === 'cambion' ? cycle.active : cycle.state;

    return {
      name: worldName,
      state: currentState,
      timeLeft
    };
  });
};

const fetchWorldCyclesData = async () => {
  return Promise.all([
    apiCall('earthCycle'),
    apiCall('cetusCycle'),
    apiCall('vallisCycle'),
    apiCall('cambionCycle')
  ]);
} 
