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

  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    let openWorldSection = document.getElementById('open-world');

    if (isCollapsed) {
      openWorldSection.classList.add('collapsed');
    } else {
      openWorldSection.classList.remove('collapsed');
    }
  }, [isCollapsed]);

  const { earthCycle } = worldTimers;

  return (
    <section id="open-world" onClick={() => (isCollapsed ? setIsCollapsed(!isCollapsed) : {})}>
      <button className="collapse-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
        <span className="sign">{isCollapsed ? '+' : '‒'}</span>
      </button>

      <h2 className="section-title">Open World Cycles</h2>

      <EarthCycle cycle={earthCycle} />
    </section>
  );
};

export default OpenWorldCycles;
