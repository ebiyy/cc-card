import { createContext } from 'react';
import {
  TimeManagerActionType,
  TimeManagerStateType,
} from '../reducer/time-manager.reducer';

type TimerManagerContextType = {
  timeManagerState: TimeManagerStateType;
  timeManagerDispatch: React.Dispatch<TimeManagerActionType>;
};

export const timerManagerInitialState = { timer: 0 };

export const TimerManagerContext = createContext({} as TimerManagerContextType);
