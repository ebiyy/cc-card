import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CHRACTER_CARDS } from '../constant/character';
import { dropIt, allowDrop } from '../script/drag-and-drop';
import CardTooltip from '../main-field/character/card-tooltip';

function getRarity(imgId: string) {
  return CHRACTER_CARDS.filter(chara => chara.fileName === imgId)[0].rarity;
}

function resetCartTooltip() {
  console.log('leave');
  const cardTooltipElm = document.getElementById('cardTooltip');
  if (cardTooltipElm) ReactDOM.unmountComponentAtNode(cardTooltipElm);
}

type Props = {
  imgId?: string;
};

const fullPoint = 97;

const statusBar: React.FC<Props> = props => {
  const [imgId, setImgId] = useState<string>();
  const [maxHitPoints, setMaxHitPoints] = useState<number>();
  const [hitPoints, setHitPoints] = useState<number>();
  const [coolTime, setCoolTime] = useState<number>();

  function reset() {
    setCoolTime(0);
    setHitPoints(100);
    setMaxHitPoints(100);
  }

  useEffect(() => {
    reset();
    if (props.imgId) {
      setImgId(props.imgId);
    }
    setInterval(() => {
      setHitPoints(hitPoints => {
        if (hitPoints !== undefined) {
          if (hitPoints <= 0) {
            reset();
            return;
          }
          const afterHitPoints = hitPoints - 10;
          return afterHitPoints > 0 ? afterHitPoints : 0;
        }
      });
    }, 50000);

    setInterval(() => {
      setCoolTime(coolTime => {
        if (coolTime !== undefined) {
          if (coolTime >= fullPoint) {
            return 0;
          }
          const afterCoolTime = coolTime + 10;
          return afterCoolTime === fullPoint ? 0 : afterCoolTime;
        }
      });
    }, 10000);
  }, [props.imgId]);

  return (
    <div
      className={`pure-card ${imgId ? getRarity(imgId) : ''}`}
      onDrop={event => setImgId(dropIt(event))}
      onDragOver={event => allowDrop(event)}
      onMouseEnter={event => {
        console.log('enter');
        return imgId ? CardTooltip(imgId, event) : null;
      }}
      onMouseLeave={() => resetCartTooltip()}
    >
      {imgId ? (
        <img
          src={`asset/image/character/${imgId}.png`}
          alt="character-card"
          width="100%"
        />
      ) : (
        '❶'
      )}
      {maxHitPoints && hitPoints ? (
        <div className="status-bar">
          <ul>
            <li
              style={{
                width: `${
                  (hitPoints / maxHitPoints) * 100 > 97
                    ? 97
                    : (hitPoints / maxHitPoints) * 100
                }%`,
              }}
            >
              HP
            </li>
            <li style={{ width: `${coolTime}%` }}>CT</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default statusBar;
