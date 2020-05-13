export type EnemyHPStateType = {
  monster1: number;
  monster2: number;
  monster3: number;
};

export enum HPeffect {
  Set,
  Sub,
  Add,
}

export type EnemyType = 'monster1' | 'monster2' | 'monster3';

export type EnemyHPActionType = {
  target: EnemyType;
  type: HPeffect;
  numbers: number;
};

export const enemyHPReducer = (
  state: EnemyHPStateType,
  action: EnemyHPActionType,
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
