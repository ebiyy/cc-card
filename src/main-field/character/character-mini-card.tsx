import React, { useState, useEffect, useContext, useReducer } from 'react';
import { allowDrop } from '../../script/drag-and-drop';
import './character-mini-card.scss';
import { CHRACTER_CARDS } from '../../constant/character';
import CardTooltip from './card-tooltip';
import ReactDOM from 'react-dom';
import { MonsterHPContext } from '../enemy/enemy.context';
import {
  coolTimeReducer,
  coolTimeInitialState,
} from '../../reducer/cool-time.reducer';
import { TimerManagerContext } from '../../context/time-manager.context';
import AttackAnimation from './attack-animation';
import { MAX_COOL_TIME } from '../../constant/game-setting';
import fitty from 'fitty';

function getRarity(imgId: string) {
  return CHRACTER_CARDS.filter(chara => chara.fileName === imgId)[0].rarity;
}

function resetCartTooltip() {
  console.log('leave');
  const cardTooltipElm = document.getElementById('cardTooltip');
  if (cardTooltipElm) ReactDOM.unmountComponentAtNode(cardTooltipElm);
}

const TARGETS: ('monster1' | 'monster2' | 'monster3')[] = [
  'monster1',
  'monster2',
  'monster3',
];

type Props = {
  characterImgId?: string;
  id: string;
};

// const coolTimeVar = 10;
const characterHP = 100;
const damagePerSec = 0.1;

const coolTimeArray = [5, 20, 5, 10, 15, 30].map(val => val * 1);

function getTargets() {
  const n = Math.floor(Math.random() * (TARGETS.length + 1));
  const shuffledTargets = TARGETS.sort(() => 0.5 - Math.random());
  const selectedTargets = shuffledTargets.slice(0, n);
  return selectedTargets;
}

const CharacterMiniCard: React.FC<Props> = props => {
  const [characterImgId, setCharacterImgId] = useState<string>();
  const [selfHP, setselfHP] = useState<number>();
  const [selfCurrentHP, setSelfCurrentHP] = useState<number>();
  const [targets, setTargets] = useState<
    ('monster1' | 'monster2' | 'monster3')[]
  >();
  const [coolTimePerSec, setCoolTimePerSec] = useState<number>();

  const { monsterHPState, monsterHPDispatch } = useContext(MonsterHPContext);

  const [coolTimeState, coolTimeDispatch] = useReducer(
    coolTimeReducer,
    coolTimeInitialState,
  );

  const { timeManagerState, timeManagerDispatch } = useContext(
    TimerManagerContext,
  );

  function reset() {
    coolTimeDispatch({ type: 'set', num: 0 });
    setSelfCurrentHP(characterHP);
    setselfHP(characterHP);
    setTargets(getTargets());
  }

  function getDropCharacterInfo(ev: any) {
    ev.preventDefault(); // default is not to allow drop
    let dropElmId = ev.dataTransfer.getData('text/plain');
    let characterImgElm = document.getElementById(dropElmId);
    if (characterImgElm) {
      getCoolTimePerSec(characterImgElm?.id);
    }
    return characterImgElm?.id;
  }

  function getCoolTimePerSec(characterImgId: string) {
    const characterCard = CHRACTER_CARDS.filter(
      character => character.fileName === characterImgId,
    )[0];
    const coolTimePerSec = coolTimeArray[characterCard.ranks];
    setCoolTimePerSec(coolTimePerSec);
  }

  // TODO:タイミング検討
  useEffect(() => {
    fitty('.sub-name', { minSize: 10, maxSize: 22 });
    fitty('.main-name', { minSize: 10, maxSize: 22 });
  });

  useEffect(() => {
    reset();
    if (props.characterImgId) {
      setCharacterImgId(props.characterImgId);
      getCoolTimePerSec(props.characterImgId);
    }
    setInterval(() => {
      setSelfCurrentHP(selfCurrentHP => {
        if (selfCurrentHP !== undefined) {
          if (selfCurrentHP <= 0) {
            reset();
            return;
          }
          const nextHP = selfCurrentHP - damagePerSec;
          return nextHP > 0 ? nextHP : 0;
        }
      });
    }, 50000);
  }, [props.characterImgId]);

  useEffect(() => {
    if (coolTimePerSec) {
      coolTimeDispatch({ type: 'add', num: coolTimePerSec });
    }
  }, [timeManagerState, coolTimePerSec]);

  useEffect(() => {
    if (coolTimeState.num === MAX_COOL_TIME) {
      if (targets && targets.length > 0) {
        targets.forEach(target => {
          if (monsterHPState[target])
            monsterHPDispatch({ target: target, type: 'sub', numbers: 1 });
        });
      }
      coolTimeDispatch({ type: 'set', num: 0 });
      setTargets(getTargets());
    }
  }, [coolTimeState, monsterHPDispatch, monsterHPState, targets]);

  return (
    <div
      id={props.id}
      className={`pure-card ${characterImgId ? getRarity(characterImgId) : ''}`}
    >
      {characterImgId ? (
        <img
          src={`asset/image/character/${characterImgId}.png`}
          alt="character-card"
          width="100%"
          onDrop={event => setCharacterImgId(getDropCharacterInfo(event))}
          onDragOver={event => allowDrop(event)}
          onMouseEnter={event => {
            console.log('enter');
            return characterImgId ? CardTooltip(characterImgId, event) : null;
          }}
          onMouseLeave={() => resetCartTooltip()}
        />
      ) : (
        '❶'
      )}
      {selfHP && selfCurrentHP ? (
        <div className="status-bar">
          <ul>
            <li
              style={{
                width: `${(selfCurrentHP / selfHP) * 100}%`,
              }}
            >
              HP
            </li>
            <li style={{ width: `${coolTimeState.num}%` }}>CT</li>
          </ul>
        </div>
      ) : null}
      {targets && characterImgId && coolTimePerSec
        ? targets.map((target, index) => (
            <AttackAnimation
              target={target}
              selfElmId={props.id}
              coolTimePerSec={coolTimePerSec}
              characterImgId={characterImgId}
              key={index}
            />
          ))
        : null}
    </div>
  );
};

export default CharacterMiniCard;
