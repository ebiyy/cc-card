import React, { useContext } from 'react';
import './enemy.scss';
import EnemyContent from './enemy-content';
import CurrentFloorContext from '../../context/current-floor';

export function zeroPadding(num: number, length: number) {
  return ('0000000000' + num).slice(-length);
}

const Enemy: React.FC = () => {
  const [currentFloor, setCurrentFloor] = useContext(CurrentFloorContext);
  return (
    <section
      className="enemy-container"
      style={{
        backgroundImage: `url(${require(`../../asset/img/dungeon/d${zeroPadding(
          currentFloor.num + 1,
          3,
        )}.jpg`)})`,
      }}
    >
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
