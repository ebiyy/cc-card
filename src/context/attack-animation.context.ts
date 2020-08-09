import { createContext } from 'react';

type AtackAnimationToggleType = {
  atackAnimationToggle: boolean;
  setatackAnimationToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export const atackAnimationToggleInitState = true;

export const AtackAnimationToggleContext = createContext(
  {} as AtackAnimationToggleType,
);
