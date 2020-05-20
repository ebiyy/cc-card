import React, { useState, useEffect, CSSProperties, useContext } from 'react';
import './tower.scss';
import caveImg from '../../asset/img/dungeon/d001.jpg';
import { EnemyKillCountContext } from '../../context/enemy-kill-count.context';
import { reducerActionType } from '../../reducer/enemy-kill-count.reducer';
import { GiChest } from 'react-icons/gi';
import CurrentFloorContext from '../../context/current-floor';
import { zeroPadding } from '../enemy/enemy';

const minFloorHeightSize = 150;

const Tower: React.FC = () => {
  const [floorHeightSize, setFloorHeightSize] = useState<number>();
  const [maxDispTowerFloors, setMaxDispTowerFloors] = useState<number>();
  const [defaultDispFloors, setDefaultDispFloors] = useState<number>(0);
  const [chestFloor, setChestFloor] = useState<boolean>(false);

  const { enemyKillCountState, enemyKillCountDispatch } = useContext(
    EnemyKillCountContext,
  );
  const [currentFloor, setCurrentFloor] = useContext(CurrentFloorContext);

  const floorStyle: CSSProperties = {
    // backgroundImage: `url(${caveImg})`,
    backgroundImage: `url(${require(`../../asset/img/dungeon/d${zeroPadding(
      currentFloor.num + 1,
      3,
    )}.jpg`)})`,
    backgroundSize: 'cover',
  };

  useEffect(() => {
    const towerElm = document.getElementsByClassName('gallery')[0];
    function callResize() {
      const towerElmHeight = towerElm.clientHeight;
      const dispTowerFloors = Math.round(
        towerElm.clientHeight / minFloorHeightSize,
      );
      setMaxDispTowerFloors(dispTowerFloors);
      const floorHeightSize = Math.round(towerElmHeight / dispTowerFloors);
      setFloorHeightSize(floorHeightSize);
      setDefaultDispFloors(dispTowerFloors);
    }
    callResize();
    window.addEventListener('resize', callResize);
  }, []);

  useEffect(() => {
    if (enemyKillCountState.num >= 30) {
      setCurrentFloor(currentFloor => {
        currentFloor.num = ++currentFloor.num;
        if (currentFloor.num === 1) currentFloor.num = 2;
        return currentFloor;
      });
      const x = Math.random();
      if (x < 0.15) {
        setChestFloor(true);
      } else {
        setChestFloor(false);
      }
      enemyKillCountDispatch({ type: reducerActionType.Set, num: 0 });
    }
  }, [enemyKillCountState, enemyKillCountDispatch, setCurrentFloor]);

  useEffect(() => {
    console.log(currentFloor.num, { maxDispTowerFloors });
    if (currentFloor.num === maxDispTowerFloors) {
      setMaxDispTowerFloors(maxDispTowerFloors => {
        if (maxDispTowerFloors) return maxDispTowerFloors + defaultDispFloors;
      });
    }
  }, [currentFloor.num, maxDispTowerFloors, defaultDispFloors]);

  function getFloorStyle(
    i: number,
    floorHeightSize: number,
    currentFloor: number,
  ) {
    const style = {
      height: `${floorHeightSize}px`,
      backgroundColor: currentFloor === i ? 'white' : 'black',
    };
    if (currentFloor === i) return Object.assign(style, floorStyle);
    return style;
  }

  return (
    <section className="gallery">
      {floorHeightSize && maxDispTowerFloors
        ? (() => {
            const items = [];
            for (
              let i = maxDispTowerFloors - defaultDispFloors;
              i < maxDispTowerFloors;
              i++
            ) {
              items.push(
                <div
                  key={i}
                  style={getFloorStyle(i, floorHeightSize, currentFloor.num)}
                >
                  <div
                    style={{
                      color: currentFloor.num === i ? 'white' : 'black',
                      display: currentFloor.num === i ? 'flex' : 'none',
                    }}
                  >
                    {i + 1}F
                  </div>
                  {chestFloor ? (
                    <div
                      style={{
                        color: currentFloor.num === i ? 'white' : 'black',
                        display: currentFloor.num === i ? 'flex' : 'none',
                      }}
                    >
                      <GiChest />
                    </div>
                  ) : null}
                </div>,
              );
            }
            return <div>{items}</div>;
          })()
        : null}
    </section>
  );
};

export default Tower;
