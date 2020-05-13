import React, { useState, useReducer, useEffect } from 'react';
import './main-field.scss';
import Enemy from './enemy/enemy';
import Character from './character/character';
import CardListDashborad from '../card-list-dashborad/card-list-dashborad';
import HeaderField from './header/header-field';

import { enemyHPinitialState, EnemyHPContext } from './enemy/enemy.context';
import { enemyHPReducer } from '../reducer/enemy-hp.reducer';
import { timeManagerReducer } from '../reducer/time-manager.reducer';
import {
  timerManagerInitialState,
  TimerManagerContext,
} from '../context/time-manager.context';
import Tower from './tower/tower';
import {
  AttackAnimationDispSettingContext,
  attackAnimationDispSettingState,
} from './character/attack-animation.context';
import { characterHPReducer } from '../reducer/character-hp.reducer';
import {
  characterHPinitialState,
  CharacterHPContext,
} from './character/character.context';

const MainField: React.FC = () => {
  const [cardCoiceMode, setCardCoiceMode] = useState<boolean>(false);
  const [enemyHPState, enemyHPDispatch] = useReducer(
    enemyHPReducer,
    enemyHPinitialState,
  );
  const [characterHPState, characterHPDispatch] = useReducer(
    characterHPReducer,
    characterHPinitialState,
  );
  const [timeManagerState, timeManagerDispatch] = useReducer(
    timeManagerReducer,
    timerManagerInitialState,
  );
  const [attackAnimationDispSetting, setAttackAnimationDispSetting] = useState(
    attackAnimationDispSettingState,
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
      <AttackAnimationDispSettingContext.Provider
        value={{ attackAnimationDispSetting, setAttackAnimationDispSetting }}
      >
        <div className="main-container" id="gameArea">
          <HeaderField setCardCoiceMode={setCardCoiceMode} />
          <div className="flexbox">
            {cardCoiceMode ? null : <Tower />}
            <section className="main">
              <div className="card-container">
                <EnemyHPContext.Provider
                  value={{ enemyHPState, enemyHPDispatch }}
                >
                  <CharacterHPContext.Provider
                    value={{ characterHPState, characterHPDispatch }}
                  >
                    <Enemy />
                    <Character />
                  </CharacterHPContext.Provider>
                </EnemyHPContext.Provider>
              </div>
            </section>
            {cardCoiceMode ? (
              <section className="cardList">
                <CardListDashborad />
              </section>
            ) : (
              <section className="side">
                <div>
                  <h1>Current Floors</h1>
                  <p>The Little Prince (French: Le Petit Prince),...</p>
                </div>
                <div>
                  <h1>2nd Town</h1>
                  <p>The Little Prince (French: Le Petit Prince),...</p>
                </div>
                <div>
                  <h1>3rd Town</h1>
                  <p>The Little Prince (French: Le Petit Prince),...</p>
                </div>
                <div>
                  <h1>Other Group Floors</h1>
                  <p>The Little Prince (French: Le Petit Prince),...</p>
                </div>
                <div>
                  <h1>Training Room</h1>
                  <p>The Little Prince (French: Le Petit Prince),...</p>
                </div>
              </section>
            )}
          </div>
        </div>
      </AttackAnimationDispSettingContext.Provider>
    </TimerManagerContext.Provider>
  );
};

export default MainField;
