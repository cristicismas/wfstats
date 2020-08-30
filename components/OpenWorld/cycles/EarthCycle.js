import React from 'react';
import styles from './Cycle.module.css';

const EarthCycle = ({ cycle={} }) => {
  return (
    <div className={styles.world}>
      <h3 className={styles.worldName}>Earth</h3>

      <h4 className={styles.currentState}>
        It is currently: <div className="accent">{cycle.state}</div>
      </h4>

      <h4 className={styles.timeLeft}>
        Time until <div className="accent">{cycle.isDay ? 'night' : 'day'}</div>:{' '}
        <div className="accent">{cycle.timeLeft}</div>
      </h4>
    </div>
  );
};

export default EarthCycle;
