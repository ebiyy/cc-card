import React, { useEffect } from 'react';
import './card-list-dashborad.scss';
import {
  CartType,
  CHRACTER_CARDS,
  CHARACTER_NAMES,
  CharacterCards,
} from '../../constant/character';
import { GiCrossedSwords, GiLifeSupport } from 'react-icons/gi';
import fitty from 'fitty';
import { dragStart } from '../../services/drag-and-drop';

export const RARITY = {
  common: 'Common',
  uncommon: 'Uncommon',
  rare: 'Rare',
  superRare: 'Super Rare',
  ultraRare: 'Ultra Rare',
  legendRare: 'Legend Rare',
};

export function getCharaName(chara: CharacterCards) {
  return CHARACTER_NAMES.filter(
    base => base.characterId === chara.characterId,
  )[0].jaName;
}

export function getCharaKanaName(chara: CharacterCards) {
  return CHARACTER_NAMES.filter(
    base => base.characterId === chara.characterId,
  )[0].kanaName;
}

const CardListDashborad: React.FC = () => {
  const [loaded, setLoaded] = React.useState(false);

  // useEffect(() => {
  //   fitty('.sub-name', { minSize: 10, maxSize: 22 });
  //   fitty('.main-name', { minSize: 10, maxSize: 22 });
  // });

  // これやる
  // [Using Hooks for Lazy-Loading Images in React - Better Programming - Medium](https://medium.com/better-programming/image-lazy-loading-in-react-intersection-observer-a9ae912ddafe)
  // todo: 文字数からクラス名を決めてフォントサイズ決める（fittyは重すぎる
  return (
    <div id="CardListDashborad" className="row">
      {CHRACTER_CARDS.map((chara, index) => (
        <div className="column" key={index}>
          <div
            id={chara.fileName}
            className={`card ${chara.rarity} ${chara.cardType}`}
            draggable="true"
            onDragStart={event => dragStart(event)}
          >
            <div className="card-header">
              <div className="card-type">
                {chara.cardType === CartType.Battle ? (
                  <GiCrossedSwords></GiCrossedSwords>
                ) : null}
                {chara.cardType === CartType.Support ? (
                  <GiLifeSupport></GiLifeSupport>
                ) : null}
              </div>
              <div className="display-name">
                <div className="sub-name">{getCharaKanaName(chara)}</div>
                <div className="main-name">{getCharaName(chara)}</div>
              </div>
            </div>

            <div className="rarity-class">
              <p>{RARITY[chara.rarity]}</p>
            </div>

            <img
              src={require(`asset/img/character/${chara.fileName}.png`)}
              alt="logo"
              width="100%"
              draggable="false"
            />
          </div>
        </div>
      ))}
      {/* <MonsterCardList></MonsterCardList> */}
    </div>
  );
};

export default CardListDashborad;
