import apiCall from './api';
import WORLDS from 'constants/cycles';

export const getWorldStates = async () => {
  let worldStates = await formatWorldStates();
  return worldStates;
};

const getCambionTime = (cycle) => {
  const currentTime = new Date();
  const timeDifference = new Date(new Date(cycle.expiry) - currentTime);
  return `${timeDifference.getUTCHours()}h ${timeDifference.getUTCMinutes()}m ${timeDifference.getUTCSeconds()}s`;
}

const formatWorldStates = async () => {
  const worldCycles = await fetchWorldCyclesData();


  return worldCycles.map((cycle, index) => {
    const world = Object.keys(WORLDS)[index];

    let timeLeft = world === 'cambion' ? getCambionTime(cycle)  : cycle.timeLeft;

    const currentState = world === 'cambion' ? cycle.active : cycle.state;

    return {
      name: world,
      state: currentState,
      timeLeft
    }
  });
}

const fetchWorldCyclesData = async () => {
  return Promise.all([
    apiCall('earthCycle'),
    apiCall('cetusCycle'),
    apiCall('vallisCycle'),
    apiCall('cambionCycle')
  ]);
} 
