import {
  EnemyHPStateType,
  EnemyHPActionType,
} from '../reducer/enemy-hp.reducer';
import { createContext } from 'react';

type EnemyHPContextType = {
  enemyHPState: EnemyHPStateType;
  enemyHPDispatch: React.Dispatch<EnemyHPActionType>;
};

export const enemyHPInitState = { monster1: 0, monster2: 0, monster3: 0 };

export const EnemyHPContext = createContext({} as EnemyHPContextType);
