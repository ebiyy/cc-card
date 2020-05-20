export type EnemyKillCountStateType = {
  num: number;
};

export enum reducerActionType {
  Set,
  Sub,
  Add,
}

export type EnemyKillCountActionType = {
  type: reducerActionType;
  num: number;
};

export const enemyKillCountReducer = (
  state: EnemyKillCountStateType,
  action: EnemyKillCountActionType,
) => {
  switch (action.type) {
    case reducerActionType.Set:
      return { ...state, num: action.num };
    case reducerActionType.Sub:
      return {
        ...state,
        num: state.num - action.num,
      };
    case reducerActionType.Add:
      return {
        ...state,
        num: state.num + action.num,
      };
    default:
      return state;
  }
};
