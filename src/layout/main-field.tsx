import React, { useState, useReducer, useEffect } from 'react';

import './main-field.scss';
import {
  enemyHPReducer,
  characterHPReducer,
  timeManagerReducer,
  enemyKillCountReducer,
} from '../reducer';
import {
  enemyHPInitState,
  characterHPInitState,
  timerManagerInitialState,
  enemyKillCountInitialState,
  currentFloorInitState,
  TimerManagerContext,
  AtackAnimationToggleContext,
  EnemyKillCountContext,
  CurrentFloorContext,
  EnemyHPContext,
  CharacterHPContext,
} from '../context';
import { CurrentFloor } from '../context/current-floor';
import {
  HeaderField,
  CardListDashborad,
  ParallelUniverse,
  Enemy,
  FirstCharacter,
  Rooms,
} from '../domain';

const MainField: React.FC = () => {
  const [cardCoiceMode, setCardCoiceMode] = useState<boolean>(false);
  const [enemyHPState, enemyHPDispatch] = useReducer(
    enemyHPReducer,
    enemyHPInitState,
  );
  const [characterHPState, characterHPDispatch] = useReducer(
    characterHPReducer,
    characterHPInitState,
  );
  const [timeManagerState, timeManagerDispatch] = useReducer(
    timeManagerReducer,
    timerManagerInitialState,
  );
  const [enemyKillCountState, enemyKillCountDispatch] = useReducer(
    enemyKillCountReducer,
    enemyKillCountInitialState,
  );
  const [atackAnimationToggle, setatackAnimationToggle] = useState(false);
  const [currentFloor, setCurrentFloor] = useState<CurrentFloor>(
    currentFloorInitState,
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
      <AtackAnimationToggleContext.Provider
        value={{ atackAnimationToggle, setatackAnimationToggle }}
      >
        <EnemyKillCountContext.Provider
          value={{ enemyKillCountState, enemyKillCountDispatch }}
        >
          <CurrentFloorContext.Provider value={[currentFloor, setCurrentFloor]}>
            <div className="main-container" id="gameArea">
              <HeaderField setCardCoiceMode={setCardCoiceMode} />
              {cardCoiceMode ? (
                <section className="cardList">
                  <CardListDashborad />
                </section>
              ) : (
                <div className="flexbox">
                  {cardCoiceMode ? (
                    <section className="gallery"></section>
                  ) : (
                    <ParallelUniverse />
                  )}
                  <section className="main">
                    <div className="card-container">
                      <EnemyHPContext.Provider
                        value={{ enemyHPState, enemyHPDispatch }}
                      >
                        <CharacterHPContext.Provider
                          value={{ characterHPState, characterHPDispatch }}
                        >
                          <Enemy />
                          <FirstCharacter />
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
                      <Rooms />
                    </section>
                  )}
                </div>
              )}
            </div>
          </CurrentFloorContext.Provider>
        </EnemyKillCountContext.Provider>
      </AtackAnimationToggleContext.Provider>
    </TimerManagerContext.Provider>
  );
};

export default MainField;
