import React, { useContext, useEffect, useState } from 'react';
import './enemy.scss';
import EnemyContent from './enemy-content';
import CurrentFloorContext from '../../context/current-floor';
import { EnemyKillCountContext } from '../../context/enemy-kill-count.context';
import { DUNGEON_DATA } from '../../constant/dungeon';

export function zeroPadding(num: number, length: number) {
  return ('0000000000' + num).slice(-length);
}

const Enemy: React.FC = () => {
  const { enemyKillCountState, enemyKillCountDispatch } = useContext(
    EnemyKillCountContext,
  );
  const [resetCount, setResetCount] = useState<number>(0);

  useEffect(() => {
    if (enemyKillCountState.num > (resetCount + 1) * 1000) {
      setResetCount(val => val + 1);
    }
  }, [enemyKillCountState.num, resetCount]);

  return (
    <section
      className="enemy-container"
      style={{
        backgroundImage: `url(${require(`asset/img/dungeon/${DUNGEON_DATA[resetCount].imgFileNmae}`)})`,
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
