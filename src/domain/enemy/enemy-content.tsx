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
import { EnemyHPContext } from './enemy.context';
import {
  coolTimeReducer,
  coolTimeInitialState,
} from '../../reducer/cool-time.reducer';
import { HPeffect } from '../../reducer/enemy-hp.reducer';
import { MAX_COOL_TIME } from '../../constant/game-setting';
import { CharacterHPContext } from '../character/character.context';
import { CharacterType } from '../../reducer/character-hp.reducer';
import { TimerManagerContext } from '../../context/time-manager.context';
import { EnemyKillCountContext } from '../../context/enemy-kill-count.context';
import { reducerActionType } from '../../reducer/enemy-kill-count.reducer';

const monsterBaseData = MONSTER_BASE_DATA;
const monsterData = MONSTER_DATA;

interface MonsterInfo {
  monsterId: number;
  jaName: string;
  enName: string;
  imgFileName: string;
  HP: number;
}

export type CharacterTargetsType = CharacterType[];

const CHARACTER_TARGETS: CharacterTargetsType = [
  'vanguard1',
  'vanguard2',
  'vanguard3',
  'vanguard4',
  'vanguard5',
  'rearguard1',
  'rearguard2',
  'rearguard3',
  'rearguard4',
  'rearguard5',
];

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

export function getCharacterTargets(targets: CharacterTargetsType) {
  const n = Math.floor(Math.random() * (targets.length + 1));
  const shuffledTargets = targets.sort(() => 0.5 - Math.random());
  const selectedTargets = shuffledTargets.slice(0, n);
  return selectedTargets;
}

type Props = {
  elmId: 'monster1' | 'monster2' | 'monster3';
};

const EnemyContent: React.FC<Props> = props => {
  const [monsterInfo, setMonsterInfo] = useState<MonsterInfo>();
  const [maxHP, setMaxHP] = useState<number>();
  const [coolTimeState, coolTimeDispatch] = useReducer(
    coolTimeReducer,
    coolTimeInitialState,
  );
  const { enemyHPState, enemyHPDispatch } = useContext(EnemyHPContext);
  const { characterHPState, characterHPDispatch } = useContext(
    CharacterHPContext,
  );
  const [targets, setTargets] = useState<CharacterType[]>();
  const { timeManagerState, timeManagerDispatch } = useContext(
    TimerManagerContext,
  );
  const { enemyKillCountState, enemyKillCountDispatch } = useContext(
    EnemyKillCountContext,
  );

  const resetData = useCallback(() => {
    coolTimeDispatch({ type: 'set', num: 0 });
    const tempMonsterInfo = getMonsterInfo();
    setMonsterInfo(tempMonsterInfo);
    setMaxHP(tempMonsterInfo.HP);
    enemyHPDispatch({
      target: props.elmId,
      type: HPeffect.Set,
      numbers: tempMonsterInfo.HP,
    });
  }, [enemyHPDispatch, props.elmId]);

  useEffect(() => {
    if (enemyHPState[props.elmId] <= 0) {
      enemyKillCountDispatch({ type: reducerActionType.Add, num: 1 });
      resetData();
    }
  }, [enemyHPState, props.elmId, resetData, enemyKillCountDispatch]);

  useEffect(() => {
    if (coolTimeState.num === MAX_COOL_TIME) {
      if (targets && targets.length > 0) {
        targets.forEach(target => {
          if (characterHPState && characterHPState[target])
            characterHPDispatch({ target, type: HPeffect.Sub, numbers: 5 });
        });
      }
      coolTimeDispatch({ type: 'set', num: 0 });
      setTargets(getCharacterTargets(CHARACTER_TARGETS));
    }
  }, [coolTimeState, targets, characterHPDispatch, characterHPState, props]);

  useEffect(() => {
    resetData();
  }, [resetData]);

  useEffect(() => {
    coolTimeDispatch({ type: 'add', num: 15 });
  }, [timeManagerState, coolTimeDispatch]);

  return (
    <Fragment>
      {monsterInfo && enemyHPState[props.elmId] && maxHP ? (
        <div
          className="monster-contents"
          style={{
            display: enemyHPState[props.elmId] <= 0 ? 'none' : 'block',
          }}
        >
          <div className="status-bar">
            <ul>
              <li
                style={{
                  width: `${(enemyHPState[props.elmId] / maxHP) * 100}%`,
                }}
              >
                HP
              </li>
              <li style={{ width: `${coolTimeState.num}%` }}>CT</li>
            </ul>
          </div>
          <img
            className="monster-img"
            src={require(`asset/img/${monsterInfo.imgFileName}.png`)}
            alt="monster-img"
          />
          <div className="monster-name">{monsterInfo.jaName}</div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default EnemyContent;
