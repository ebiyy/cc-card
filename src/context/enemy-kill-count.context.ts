import { createContext } from 'react';
import {
  EnemyKillCountStateType,
  EnemyKillCountActionType,
} from '../reducer/enemy-kill-count.reducer';

type EnemyKillCountContextType = {
  enemyKillCountState: EnemyKillCountStateType;
  enemyKillCountDispatch: React.Dispatch<EnemyKillCountActionType>;
};

export const enemyKillCountInitialState = { num: 0 };

export const EnemyKillCountContext = createContext(
  {} as EnemyKillCountContextType,
);
