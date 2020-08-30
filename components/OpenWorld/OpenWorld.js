import React, { useState, useEffect } from 'react';
import apiCall from 'utils/api';

import EarthCycle from './cycles/EarthCycle';

const getWorldCycles = async () => {
  let earthCycle = await apiCall('earthCycle');
  let cetusCycle = await apiCall('cetusCycle');

  return { earthCycle, cetusCycle };
};

const OpenWorldCycles = () => {
  const [worldTimers, setWorldTimers] = useState({
    earthCycle: {}
  });

  useEffect(() => {
    getWorldCycles().then(timers => setWorldTimers(timers));
  }, []);

  const { earthCycle } = worldTimers;

  return (
    <section id="open-world">
      <h2 className="section-title">Open World Cycles</h2>

      <EarthCycle cycle={earthCycle} />
    </section>
  );
};

export default OpenWorldCycles;
