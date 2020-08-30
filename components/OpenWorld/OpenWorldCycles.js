import React, { useState, useEffect } from 'react';
import apiCall from 'utils/api';
import styles from './OpenWorldCycles.module.css';

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
    <section id={styles.openWorld}>
      <h2 className={styles.sectionTitle}>Open World Cycles</h2>

      <h3 className={styles.worldName}>Earth</h3>

      <h4 className={styles.currentState}>
        It is currently: <div className="accent">{earthCycle.state}</div>
      </h4>
      <h4 className={styles.timeLeft}>
        Time until{' '}
        <div className="accent">
          {earthCycle.isDay ? 'night' : 'day'}
        </div>
        :{' '}
        <div className="accent">
        {earthCycle.timeLeft}
        </div>
        
      </h4>
    </section>
  );
};

export default OpenWorldCycles;
