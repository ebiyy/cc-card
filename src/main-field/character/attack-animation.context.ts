import { createContext } from 'react';

type AttackAnimationDispSettingType = {
  attackAnimationDispSetting: boolean;
  setAttackAnimationDispSetting: React.Dispatch<React.SetStateAction<boolean>>;
};

export const attackAnimationDispSettingState = true;

export const AttackAnimationDispSettingContext = createContext(
  {} as AttackAnimationDispSettingType,
);
