import React, { CSSProperties } from 'react';
import './attack-animation.scss';
import {
  MINIMUM_SYSTEM_SECOND,
  MAX_COOL_TIME,
} from '../../constant/game-setting';

type Props = {
  target: 'monster1' | 'monster2' | 'monster3';
  selfElmId: string;
  coolTimePerSec: number;
  characterImgId: string;
};

const iconImgSize = 80;

const AttackAnimation: React.FC<Props> = props => {
  function generateStyle(target: 'monster1' | 'monster2' | 'monster3') {
    // && props.selfElmId === 'rearguard1' || props.selfElmId === 'rearguard2';
    if (target) {
      const targetElm = document.getElementById(target);
      const selfElm = document.getElementById(props.selfElmId);
      const gameAreaElm = document.getElementById('gameArea');
      if (targetElm && selfElm && gameAreaElm) {
        const clientWidth = gameAreaElm.clientWidth;
        const clientHeight = gameAreaElm.clientHeight;
        const targetPosition = targetElm.getBoundingClientRect();
        const targetCenterX = targetPosition.left + targetPosition.width / 2;
        const targetCenterY = targetPosition.top + targetPosition.height / 2;
        const selfPosition = selfElm.getBoundingClientRect();
        const selfCenterX = selfPosition.right - selfPosition.width / 2;
        const selfCenterY = selfPosition.bottom - selfPosition.height / 2;
        const positionLeft = Math.min(targetCenterX, selfCenterX);
        const positionRight =
          -Math.max(targetCenterX, selfCenterX) + clientWidth;
        const arrowElmPosition = {
          top: targetCenterY,
          bottom: -selfCenterY + clientHeight,
          left: positionLeft,
          right: positionRight,
        };
        const arrowElmStyle = {
          position: 'fixed',
          top: `${arrowElmPosition.top}px`,
          bottom: `${arrowElmPosition.bottom}px`,
          left: `${arrowElmPosition.left}px`,
          right: `${arrowElmPosition.right}px`,
          transform: targetCenterX < selfCenterX ? 'scale(-1, 1)' : 'none',
        } as CSSProperties;
        if (arrowElmStyle?.left) {
          const arrowElmeWidth =
            clientWidth - arrowElmPosition.right - arrowElmPosition.left;
          const arrowElmHeigth =
            clientHeight -
            arrowElmPosition.bottom -
            arrowElmPosition.top -
            targetElm.clientHeight / 5;
          return (
            <div className="arrow" style={arrowElmStyle}>
              <img
                src={require(`../../..//public/asset/image/icon/${props.characterImgId}.png`)}
                alt="icon"
                className="attack-icon"
                style={{
                  animation: `${(MAX_COOL_TIME / props.coolTimePerSec) *
                    MINIMUM_SYSTEM_SECOND}s 
                    ${props.selfElmId}_${props.target}_arrow ease infinite`,
                }}
              />
              <style>
                {`
                  @keyframes ${props.selfElmId}_${props.target}_arrow {
                    0% {
                      transform: translate(-${iconImgSize / 2}px, 0);
                    }
                    100% {
                      transform: translate(
                        ${arrowElmeWidth - iconImgSize}px, 
                        -${arrowElmHeigth - iconImgSize / 2}px
                      );
                    }
                  }
                `}
              </style>
              {/* arrow用
              <div
                className="attack-icon"
                style={{
                  animation: `${(MAX_COOL_TIME / props.coolTimePerSec) *
                    MINIMUM_SYSTEM_SECOND}s ${
                    props.selfElmId
                  }_arrow ease infinite`,
                }}
              ></div>
              <style>
                {`
                  @keyframes ${props.selfElmId}_arrow {
                    0% {
                      transform: translate(
                        -22px, 
                        ${clientHeight -
                          arrowElmPosition.bottom -
                          targetCenterY -
                          10}px
                      );
                    }
                    100% {
                      transform: translate(
                        ${clientWidth -
                          arrowElmPosition.right -
                          arrowElmPosition.left -
                          20}px, 
                        -18px
                      );
                    }
                  }
                `}
              </style> */}
            </div>
          );
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  return <>{generateStyle(props.target)}</>;
};

export default AttackAnimation;
