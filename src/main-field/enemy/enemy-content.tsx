import React, {
  useState,
  useEffect,
  Fragment,
  useContext,
  useReducer,
  useCallback,
} from 'react';
import './enemy.scss';
import { MONSTER_DATA, MONSTER_BASE_DATA } from '../../constant/monster';
import { MonsterHPContext } from './enemy.context';
import {
  coolTimeReducer,
  coolTimeInitialState,
} from '../../reducer/cool-time.reducer';

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

type Props = {
  elmId: 'monster1' | 'monster2' | 'monster3';
};

const EnemyContent: React.FC<Props> = props => {
  const [monsterInfo, setMonsterInfo] = useState<MonsterInfo>();
  const [maxHitPoints, setMaxHitPoints] = useState<number>();

  const { monsterHPState, monsterHPDispatch } = useContext(MonsterHPContext);

  const [coolTimeState, coolTimeDispatch] = useReducer(
    coolTimeReducer,
    coolTimeInitialState,
  );

  const resetData = useCallback(() => {
    coolTimeDispatch({ type: 'set', num: 0 });
    const tempMonsterInfo = getMonsterInfo();
    setMonsterInfo(tempMonsterInfo);
    setMaxHitPoints(tempMonsterInfo.hitPoints);
    monsterHPDispatch({
      target: props.elmId,
      type: 'set',
      numbers: tempMonsterInfo.hitPoints,
    });
  }, [monsterHPDispatch, props.elmId]);

  useEffect(() => {
    if (monsterHPState[props.elmId] <= 0) {
      resetData();
    }
  }, [monsterHPState, props.elmId, resetData]);

  useEffect(() => {
    if (coolTimeState.num === 100) {
      setTimeout(() => {
        coolTimeDispatch({ type: 'set', num: 0 });
      }, 200);
    }
  }, [coolTimeState]);

  useEffect(() => {
    console.log('useEffectが実行されました');
    resetData();

    setInterval(() => {
      coolTimeDispatch({ type: 'add', num: 15 });
    }, 250);
  }, [monsterHPDispatch, coolTimeDispatch, props.elmId, resetData]);

  return (
    <Fragment>
      {monsterInfo && monsterHPState[props.elmId] && maxHitPoints ? (
        <div
          className="monster-contents"
          style={{
            display: monsterHPState[props.elmId] <= 0 ? 'none' : 'block',
          }}
        >
          <div className="status-bar">
            <ul>
              <li
                style={{
                  width: `${(monsterHPState[props.elmId] / maxHitPoints) *
                    100}%`,
                }}
              >
                HP
              </li>
              <li style={{ width: `${coolTimeState.num}%` }}>CT</li>
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
