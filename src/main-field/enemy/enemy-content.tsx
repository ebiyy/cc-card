import React, { useState, useEffect, Fragment } from 'react';
import './enemy.scss';
import { MONSTER_DATA, MONSTER_BASE_DATA } from '../../constant/monster';

const fullPoint = 97;

const monsterBaseData = MONSTER_BASE_DATA;
const monsterData = MONSTER_DATA;

interface MonsterInfo {
  monsterId: number;
  jaName: string;
  enName: string;
  imgFileName: string;
  hitPoints: number;
}

function getMonsterInfo() {
  const randomMonsterInfo =
    monsterBaseData[Math.floor(Math.random() * monsterBaseData.length)];
  const tempMonsterInfo: MonsterInfo = {
    ...randomMonsterInfo,
    imgFileName: monsterData.filter(
      item => item.monsterId === randomMonsterInfo.monsterId,
    )[0].fileName,
  };
  return tempMonsterInfo;
}

const EnemyContent: React.FC = () => {
  const [hitPoints, setHitPoints] = useState<number>();
  const [coolTime, setCoolTime] = useState<number>();
  const [monsterInfo, setMonsterInfo] = useState<MonsterInfo>();
  const [maxHitPoints, setMaxHitPoints] = useState<number>();

  function reset() {
    setCoolTime(0);
    const tempMonsterInfo = getMonsterInfo();
    setMonsterInfo(tempMonsterInfo);
    setHitPoints(tempMonsterInfo.hitPoints);
    setMaxHitPoints(tempMonsterInfo.hitPoints);
  }

  useEffect(() => {
    console.log('useEffectが実行されました');
    reset();

    setInterval(() => {
      setHitPoints(hitPoints => {
        if (hitPoints !== undefined) {
          if (hitPoints <= 0) {
            reset();
            return;
          }
          const afterHitPoints = hitPoints - 10;
          return afterHitPoints > 0 ? afterHitPoints : 0;
        }
      });
    }, 500);

    setInterval(() => {
      setCoolTime(coolTime => {
        if (coolTime !== undefined) {
          if (coolTime >= fullPoint) {
            return 0;
          }
          const afterCoolTime = coolTime + 10;
          return afterCoolTime === fullPoint ? 0 : afterCoolTime;
        }
      });
    }, 100);
  }, []);

  return (
    <Fragment>
      {monsterInfo && hitPoints && maxHitPoints ? (
        <div
          className="monster-contents"
          style={{ display: hitPoints <= 0 ? 'none' : 'block' }}
        >
          <div className="status-bar">
            <ul>
              <li
                style={{
                  width: `${
                    (hitPoints / maxHitPoints) * 100 > 97
                      ? 97
                      : (hitPoints / maxHitPoints) * 100
                  }%`,
                }}
              >
                HP
              </li>
              <li style={{ width: `${coolTime}%` }}>CT</li>
            </ul>
          </div>
          <img
            className="monster-img"
            src={require(`../../asset/img/${monsterInfo.imgFileName}.png`)}
            alt="monster-img"
          />
          <div className="monster-name">{monsterInfo.jaName}</div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default EnemyContent;
