import {
  MonsterHPStateType,
  MonsterHPActionType,
} from '../../reducer/monster-hp.reducer';
import { createContext } from 'react';

type MonsterHPContextType = {
  monsterHPState: MonsterHPStateType;
  monsterHPDispatch: React.Dispatch<MonsterHPActionType>;
};

export const monsterHPinitialState = { monster1: 0, monster2: 0, monster3: 0 };

export const MonsterHPContext = createContext({} as MonsterHPContextType);
