import { HPeffect } from './enemy-hp.reducer';

export type CharacterHPStateType = {
  vanguard1: number;
  vanguard2: number;
  vanguard3: number;
  vanguard4: number;
  vanguard5: number;
  rearguard1: number;
  rearguard2: number;
  rearguard3: number;
  rearguard4: number;
  rearguard5: number;
};

export type CharacterType =
  | 'vanguard1'
  | 'vanguard2'
  | 'vanguard3'
  | 'vanguard4'
  | 'vanguard5'
  | 'rearguard1'
  | 'rearguard2'
  | 'rearguard3'
  | 'rearguard4'
  | 'rearguard5';

export type CharacterHPActionType = {
  target: CharacterType;
  type: HPeffect;
  numbers: number;
};

export const characterHPReducer = (
  state: CharacterHPStateType,
  action: CharacterHPActionType,
) => {
  switch (action.type) {
    case HPeffect.Set:
      return { ...state, [action.target]: action.numbers };
    case HPeffect.Sub:
      return {
        ...state,
        [action.target]: state[action.target] - action.numbers,
      };
    case HPeffect.Add:
      return {
        ...state,
        [action.target]: state[action.target] + action.numbers,
      };
    default:
      return state;
  }
};
