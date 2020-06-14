import React, { useState, useEffect, CSSProperties, useContext } from 'react';
import './parallel-universe.scss';
import caveImg from '../../asset/img/dungeon/d001.jpg';
import { EnemyKillCountContext } from '../../context/enemy-kill-count.context';
import { reducerActionType } from '../../reducer/enemy-kill-count.reducer';
import { GiChest } from 'react-icons/gi';
import CurrentFloorContext from '../../context/current-floor';
import { zeroPadding } from '../enemy/enemy';
import Wave from 'react-wavify';
import { DUNGEON_DATA } from '../../constant/dungeon';

const minFloorHeightSize = 150;

const ParallelUniverse: React.FC = () => {
  const [floorHeightSize, setFloorHeightSize] = useState<number>();
  const [maxDispTowerFloors, setMaxDispTowerFloors] = useState<number>();
  const [defaultDispFloors, setDefaultDispFloors] = useState<number>(0);
  const [chestFloor, setChestFloor] = useState<boolean>(false);

  const [dispWorlds, setDispWorlds] = useState<number>();
  const [oneWorldElmHeight, setOneWorldElmHeight] = useState<number>();

  const { enemyKillCountState, enemyKillCountDispatch } = useContext(
    EnemyKillCountContext,
  );
  const [currentFloor, setCurrentFloor] = useContext(CurrentFloorContext);

  useEffect(() => {
    const parallelUniverseElm = document.getElementsByClassName('gallery')[0];
    function callResize() {
      const parallelUniverseElmHeight = parallelUniverseElm.clientHeight;
      const dispWorld = Math.round(
        parallelUniverseElm.clientHeight / minFloorHeightSize,
      );
      setDispWorlds(dispWorld);
      console.log(dispWorld);
      const oneWorldsElmHeightSize = Math.round(
        parallelUniverseElmHeight / dispWorld,
      );
      setFloorHeightSize(oneWorldsElmHeightSize);
      // setDefaultDispFloors(dispTowerFloors);
    }

    callResize();
    window.addEventListener('resize', callResize);
  }, []);

  useEffect(() => {
    // if (enemyKillCountState.num >= 30) {
    //   setCurrentFloor(currentFloor => {
    //     currentFloor.num = ++currentFloor.num;
    //     if (currentFloor.num === 1) currentFloor.num = 2;
    //     return currentFloor;
    //   });
    //   const x = Math.random();
    //   if (x < 0.15) {
    //     setChestFloor(true);
    //   } else {
    //     setChestFloor(false);
    //   }
    //   enemyKillCountDispatch({ type: reducerActionType.Set, num: 0 });
    // }
  }, [enemyKillCountState, enemyKillCountDispatch, setCurrentFloor]);

  useEffect(() => {
    // console.log(currentFloor.num, { maxDispTowerFloors });
    // if (currentFloor.num === maxDispTowerFloors) {
    //   setMaxDispTowerFloors(maxDispTowerFloors => {
    //     if (maxDispTowerFloors) return maxDispTowerFloors + defaultDispFloors;
    //   });
    // }
  }, [currentFloor.num, maxDispTowerFloors, defaultDispFloors]);

  const [resetCount, setResetCount] = useState<number>(0);

  useEffect(() => {
    if (enemyKillCountState.num > (resetCount + 1) * 1000) {
      setResetCount(val => val + 1);
    }
  }, [enemyKillCountState.num, resetCount]);

  return (
    <section
      className="gallery"
      style={{
        backgroundImage: `url(${require(`../../asset/img/dungeon/${DUNGEON_DATA[resetCount].imgFileNmae}`)})`,
        backgroundSize: 'cover',
      }}
    >
      <div style={{ height: `${enemyKillCountState.num * 0.01}%` }}>
        <Wave fill="url(#gradient)">
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#d4af37" />
              <stop offset="90%" stopColor="#f00" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </section>
  );
};

export default ParallelUniverse;
