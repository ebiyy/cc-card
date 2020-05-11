import React, { useState, useReducer, useEffect } from 'react';
import './main-field.scss';
import Enemy from './enemy/enemy';
import Character from './character/character';
import CardListDashborad from '../card-list-dashborad/card-list-dashborad';
import HeaderField from './header/header-field';

import { monsterHPinitialState, MonsterHPContext } from './enemy/enemy.context';
import { monsterHPReducer } from '../reducer/monster-hp.reducer';
import { timeManagerReducer } from '../reducer/time-manager.reducer';
import {
  timerManagerInitialState,
  TimerManagerContext,
} from '../context/time-manager.context';
import Tower from './tower/tower';

const MainField: React.FC = () => {
  const [cardCoiceMode, setCardCoiceMode] = useState<boolean>(false);
  const [monsterHPState, monsterHPDispatch] = useReducer(
    monsterHPReducer,
    monsterHPinitialState,
  );
  const [timeManagerState, timeManagerDispatch] = useReducer(
    timeManagerReducer,
    timerManagerInitialState,
  );

  useEffect(() => {
    timeManagerDispatch({ type: 'set', timer: 0 });
    setInterval(() => {
      timeManagerDispatch({ type: 'add', timer: 100 });
    }, 100);
  }, []);

  return (
    <TimerManagerContext.Provider
      value={{ timeManagerState, timeManagerDispatch }}
    >
      <div className="main-container" id="gameArea">
        <HeaderField setCardCoiceMode={setCardCoiceMode} />
        <div className="flexbox">
          {cardCoiceMode ? null : <Tower />}
          <section className="main">
            <div className="card-container">
              <MonsterHPContext.Provider
                value={{ monsterHPState, monsterHPDispatch }}
              >
                <Enemy />
                <Character />
              </MonsterHPContext.Provider>
            </div>
          </section>
          {cardCoiceMode ? null : (
            <section className="side">
              <h1>About</h1>
              <p>The Little Prince (French: Le Petit Prince),...</p>
            </section>
          )}
          {cardCoiceMode ? (
            <section className="cardList">
              <CardListDashborad />
            </section>
          ) : null}
        </div>
      </div>
    </TimerManagerContext.Provider>
  );
};

export default MainField;
