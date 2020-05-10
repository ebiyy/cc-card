import React from 'react';

export interface HPManager {
  monster: {
    monster1: number;
    monster2: number;
    monster3: number;
  };
  character: {
    vanguard: {
      character1: number;
      character2: number;
      character3: number;
      character4: number;
      character5: number;
    };
    rearguard: {
      character1: number;
      character2: number;
      character3: number;
      character4: number;
      character5: number;
    };
  };
}

export const presetVal = {
  monster: {
    monster1: 0,
    monster2: 0,
    monster3: 0,
  },
  character: {
    vanguard: {
      character1: 0,
      character2: 0,
      character3: 0,
      character4: 0,
      character5: 0,
    },
    rearguard: {
      character1: 0,
      character2: 0,
      character3: 0,
      character4: 0,
      character5: 0,
    },
  },
};

const HPContext = React.createContext<
  [HPManager, React.Dispatch<React.SetStateAction<HPManager>>]
>([{} as HPManager, {} as React.Dispatch<React.SetStateAction<HPManager>>]);

export const HPProvider = HPContext.Provider;
export const HPConsumer = HPContext.Consumer;
export default HPContext;
