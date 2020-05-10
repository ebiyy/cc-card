import React, { useEffect } from 'react';
import './character-mini-card.scss';
import {
  CartType,
  CHRACTER_CARDS,
  RANKS,
  GUARDS,
  PROFESSIONS,
  ELEMENTS,
  AGILITIES,
} from '../../constant/character';
import { GiCrossedSwords, GiLifeSupport } from 'react-icons/gi';
import {
  getCharaKanaName,
  getCharaName,
  RARITY,
} from '../../card-list-dashborad/card-list-dashborad';
import ReactDOM from 'react-dom';
import fitty from 'fitty';

const elmHeightSize = 500;

function CardTooltip(
  fileName: string,
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
): void {
  const cardTooltipElm = document.getElementById('cardTooltip') as Element;
  const characterInfo = CHRACTER_CARDS.filter(
    chara => chara.fileName === fileName,
  )[0];

  if (characterInfo) {
    console.log(characterInfo);
    console.log(RANKS[characterInfo.ranks]);
    const positionTop =
      event.clientY - elmHeightSize > 0 ? event.clientY - elmHeightSize : 0;
    cardTooltipElm.setAttribute(
      'style',
      `top: ${positionTop}px; left: ${event.clientX}px`,
    );
    ReactDOM.render(
      <div className="card-tooltip-container">
        <div
          id="cardTooltipContent"
          className={`card ${characterInfo.rarity} ${characterInfo.cardType}`}
        >
          <div className="card-header">
            <div className="card-type">
              {characterInfo.cardType === CartType.Battle ? (
                <GiCrossedSwords></GiCrossedSwords>
              ) : null}
              {characterInfo.cardType === CartType.Support ? (
                <GiLifeSupport></GiLifeSupport>
              ) : null}
            </div>
            <div className="display-name">
              <div className="sub-name">{getCharaKanaName(characterInfo)}</div>
              <div className="main-name">{getCharaName(characterInfo)}</div>
            </div>
          </div>
          <div className="rarity-class">
            <p>{RARITY[characterInfo.rarity]}</p>
          </div>
          <img
            src={`asset/image/character/${characterInfo.fileName}.png`}
            alt="logo"
            width="100%"
            draggable="false"
          />
        </div>
        <div className="card-info">
          <h3>ランク</h3>
          <p>{RANKS[characterInfo.ranks]}</p>
          <h3>クラス</h3>
          <p>{PROFESSIONS[characterInfo.professions]}</p>
          <h3>属性</h3>
          {characterInfo.elements.map(element => (
            <span>{ELEMENTS[element]} </span>
          ))}
          <h3>設置</h3>
          <p>{GUARDS[characterInfo.guards]}</p>
          <h3>ステータス</h3>
          <table>
            <tbody>
              <tr>
                <td>HP</td>
                <td>100</td>
              </tr>
              <tr>
                <td>攻撃力</td>
                <td>100</td>
              </tr>
              <tr>
                <td>素早さ</td>
                <td>{AGILITIES[characterInfo.agilities]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>,
      cardTooltipElm,
    );
  }
}

export default CardTooltip;
