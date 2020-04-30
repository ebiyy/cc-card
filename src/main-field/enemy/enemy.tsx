import React from 'react';
import './enemy.scss';
import EnemyContent from './enemy-content';

const Enemy: React.FC = () => {
  return (
    <section className="enemy-container">
      <div className="monster-card">
        <EnemyContent />
      </div>
      <div className="monster-card">
        <EnemyContent />
      </div>
      <div className="monster-card">
        <EnemyContent />
      </div>
    </section>
  );
};

export default Enemy;
