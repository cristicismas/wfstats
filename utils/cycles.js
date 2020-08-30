import apiCall from './api';

export const getWorldCycles = async () => {
  let earthCycle = await apiCall('earthCycle');
  let cetusCycle = await apiCall('cetusCycle');

  return { earthCycle, cetusCycle };
};
