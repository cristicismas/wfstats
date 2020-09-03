import React, { useState, useEffect } from 'react';
import { getWorldStates } from 'utils/cycles';

import WorldCycle from './WorldCycle';

const OpenWorldCycles = () => {
  const [worldStates, setWorldStates] = useState([]);

  useEffect(() => {
    let getAndSetWorldStates = async () => {
      let states = await getWorldStates();
      setWorldStates(states);
    }
    
    getAndSetWorldStates();
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

  return (
    <section id="open-world" onClick={() => (isCollapsed ? setIsCollapsed(!isCollapsed) : {})}>
      <button className="collapse-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
        <span className="sign">{isCollapsed ? '+' : '‒'}</span>
      </button>

      <h2 className="section-title">Open World Cycles</h2>

      <div className="cycles">
        {worldStates.map(world => 
          <WorldCycle key={world.name} world={world} />
        )}
      </div>
    </section>
  );
};

export default OpenWorldCycles;
