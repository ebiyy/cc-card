export type TimeManagerStateType = {
  timer: number;
};

export type TimeManagerActionType = {
  type: 'set' | 'sub' | 'add';
  timer: number;
};

export const timeManagerInitialState = { timer: 0 };

export const timeManagerReducer = (
  state: TimeManagerStateType,
  action: TimeManagerActionType,
) => {
  switch (action.type) {
    case 'set':
      return { ...state, timer: action.timer };
    case 'sub':
      return {
        ...state,
        timer: state.timer - action.timer,
      };
    case 'add':
      return {
        ...state,
        timer: state.timer + action.timer,
      };
    default:
      return state;
  }
};
