import React, { useState, useEffect } from 'react';
import './tower.scss';

const minFloorHeightSize = 80;

const Tower: React.FC = () => {
  const [floorHeightSize, setFloorHeightSize] = useState<number>();
  const [dispTowerFloors, setDispTowerFloors] = useState<number>();

  useEffect(() => {
    const towerElm = document.getElementsByClassName('gallery')[0];
    function callResize() {
      const towerElmHeight = towerElm.clientHeight;
      const dispTowerFloors = Math.round(
        towerElm.clientHeight / minFloorHeightSize,
      );
      setDispTowerFloors(dispTowerFloors);
      const floorHeightSize = Math.floor(towerElmHeight / dispTowerFloors);
      setFloorHeightSize(floorHeightSize);
    }
    callResize();
    window.addEventListener('resize', callResize);
  }, []);

  return (
    <section className="gallery">
      {floorHeightSize && dispTowerFloors
        ? [...Array(dispTowerFloors)].map((_, i) => (
            <div
              style={{
                height: `${floorHeightSize}px`,
              }}
            >
              {i + 1}F
            </div>
          ))
        : null}
    </section>
  );
};

export default Tower;
