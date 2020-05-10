export type MonsterHPStateType = {
  monster1: number;
  monster2: number;
  monster3: number;
};

export type MonsterHPActionType = {
  target: 'monster1' | 'monster2' | 'monster3';
  type: 'set' | 'sub' | 'add';
  numbers: number;
};

export const monsterHPReducer = (
  state: MonsterHPStateType,
  action: MonsterHPActionType,
) => {
  switch (action.type) {
    case 'set':
      return { ...state, [action.target]: action.numbers };
    case 'sub':
      return {
        ...state,
        [action.target]: state[action.target] - action.numbers,
      };
    case 'add':
      return {
        ...state,
        [action.target]: state[action.target] + action.numbers,
      };
    default:
      return state;
  }
};
