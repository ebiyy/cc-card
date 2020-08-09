import React from 'react';

export interface CurrentFloor {
  num: number;
}

const currentFloorInitState: CurrentFloor = {
  num: 0,
};

const CurrentFloorContext = React.createContext<
  [CurrentFloor, React.Dispatch<React.SetStateAction<CurrentFloor>>]
>([
  {} as CurrentFloor,
  {} as React.Dispatch<React.SetStateAction<CurrentFloor>>,
]);

export { CurrentFloorContext, currentFloorInitState };
