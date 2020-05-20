import React from 'react';

export interface CurrentFloor {
  num: number;
}

export const INIT_CURRENT_FLOOR: CurrentFloor = {
  num: 0,
};

const CurrentFloorContext = React.createContext<
  [CurrentFloor, React.Dispatch<React.SetStateAction<CurrentFloor>>]
>([
  {} as CurrentFloor,
  {} as React.Dispatch<React.SetStateAction<CurrentFloor>>,
]);

export const CurrentFloorProvider = CurrentFloorContext.Provider;
export const CurrentFloorConsumer = CurrentFloorContext.Consumer;
export default CurrentFloorContext;
