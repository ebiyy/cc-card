import {
  CharacterHPStateType,
  CharacterHPActionType,
} from '../../reducer/character-hp.reducer';
import { createContext } from 'react';

type CharacterHPContextType = {
  characterHPState: CharacterHPStateType;
  characterHPDispatch: React.Dispatch<CharacterHPActionType>;
};

export const characterHPinitialState = {
  vanguard1: 0,
  vanguard2: 0,
  vanguard3: 0,
  vanguard4: 0,
  vanguard5: 0,
  rearguard1: 0,
  rearguard2: 0,
  rearguard3: 0,
  rearguard4: 0,
  rearguard5: 0,
};

export const CharacterHPContext = createContext({} as CharacterHPContextType);
