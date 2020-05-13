import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from 'react';
import { EnemyHPContext } from '../main-field/enemy/enemy.context';
import {
  coolTimeReducer,
  coolTimeInitialState,
} from '../reducer/cool-time.reducer';
import { TimerManagerContext } from '../context/time-manager.context';
import { MAX_COOL_TIME } from '../constant/game-setting';
import { HPeffect } from '../reducer/enemy-hp.reducer';
import { CharacterHPContext } from '../main-field/character/character.context';
import { CharacterType } from '../reducer/character-hp.reducer';

type EnemyTargetsType = ('monster1' | 'monster2' | 'monster3')[];

const ENEMY_TARGETS: EnemyTargetsType = ['monster1', 'monster2', 'monster3'];

type Props = {
  coolTimePerSec: number;
  maxHP: number;
  targets: EnemyTargetsType | undefined;
  setTargets: React.Dispatch<
    React.SetStateAction<EnemyTargetsType | undefined>
  >;
  characterImgId: string;
  id: CharacterType;
};

const DAMAGE_PER_SEC = 30;

export function getEnemtyTargets(targets: EnemyTargetsType) {
  const n = Math.floor(Math.random() * (targets.length + 1));
  const shuffledTargets = targets.sort(() => 0.5 - Math.random());
  const selectedTargets = shuffledTargets.slice(0, n);
  return selectedTargets;
}

const StatusBar: React.FC<Props> = props => {
  const [maxHP, setMaxHP] = useState<number>();
  const { enemyHPState, enemyHPDispatch } = useContext(EnemyHPContext);

  const [coolTimeState, coolTimeDispatch] = useReducer(
    coolTimeReducer,
    coolTimeInitialState,
  );

  const { timeManagerState, timeManagerDispatch } = useContext(
    TimerManagerContext,
  );
  const { characterHPState, characterHPDispatch } = useContext(
    CharacterHPContext,
  );

  const reset = useCallback(() => {
    coolTimeDispatch({ type: 'set', num: 0 });
    setMaxHP(props.maxHP);
    characterHPDispatch({
      target: props.id,
      type: HPeffect.Set,
      numbers: props.maxHP,
    });
    props.setTargets(getEnemtyTargets(ENEMY_TARGETS));
  }, [characterHPDispatch, props]);

  useEffect(() => {
    if (characterHPState[props.id] <= 0) {
      reset();
    }
  }, [characterHPState, props.id, reset]);

  useEffect(() => {
    reset();
  }, [props.characterImgId]);

  useEffect(() => {
    coolTimeDispatch({ type: 'add', num: props.coolTimePerSec });
  }, [timeManagerState, props.coolTimePerSec]);

  useEffect(() => {
    if (coolTimeState.num === MAX_COOL_TIME) {
      if (props.targets && props.targets.length > 0) {
        props.targets.forEach(target => {
          if (enemyHPState[target])
            enemyHPDispatch({
              target,
              type: HPeffect.Sub,
              numbers: DAMAGE_PER_SEC,
            });
        });
      }
      coolTimeDispatch({ type: 'set', num: 0 });
      props.setTargets(getEnemtyTargets(ENEMY_TARGETS));
    }
  }, [coolTimeState, enemyHPDispatch, enemyHPState, props]);

  return (
    <>
      {maxHP && characterHPState && characterHPState[props.id] ? (
        <div className="status-bar">
          <ul>
            <li
              style={{
                width: `${(characterHPState[props.id] / maxHP) * 100}%`,
              }}
            >
              HP
            </li>
            <li style={{ width: `${coolTimeState.num}%` }}>CT</li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default StatusBar;
