export type CoolTimeStateType = {
  num: number;
};

export type CoolTimeActionType = {
  type: 'set' | 'sub' | 'add';
  num: number;
};

export const coolTimeInitialState = { num: 0 };

export const coolTimeReducer = (
  state: CoolTimeStateType,
  action: CoolTimeActionType,
) => {
  switch (action.type) {
    case 'set':
      return { ...state, num: action.num };
    case 'sub':
      return {
        ...state,
        num: state.num - action.num,
      };
    case 'add':
      return {
        ...state,
        num: state.num + action.num > 100 ? 100 : state.num + action.num,
      };
    default:
      return state;
  }
};
