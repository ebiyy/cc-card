import React from 'react';
import './enemy.scss';
import EnemyContent from './enemy-content';

const Enemy: React.FC = () => {
  return (
    <section className="enemy-container">
      <div id="monster1" className="monster-card">
        <EnemyContent elmId="monster1" />
      </div>
      <div id="monster2" className="monster-card">
        <EnemyContent elmId="monster2" />
      </div>
      <div id="monster3" className="monster-card">
        <EnemyContent elmId="monster3" />
      </div>
    </section>
  );
};

export default Enemy;
