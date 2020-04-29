import React from 'react';
import './card-list-dashborad.scss';
import {
  CharacterData,
  CartType,
  CHRACTER_DATA,
  CHARACTER_BASE_DATA,
} from '../constant/character';
import MonsterCardList from './monster-card-list';
import { GiCrossedSwords, GiLifeSupport } from 'react-icons/gi';

const RARITY = {
  common: 'Common',
  uncommon: 'Uncommon',
  rare: 'Rare',
  superRare: 'Super Rare',
  ultraRare: 'Ultra Rare',
  legendRare: 'Legend Rare',
};

const CardListDashborad: React.FC = () => {
  const characterData = CHRACTER_DATA;
  const characterBaseData = CHARACTER_BASE_DATA;

  function getCharaName(chara: CharacterData) {
    return characterBaseData.filter(
      base => base.characterId === chara.characterId,
    )[0].jaName;
  }

  function calcFontSize(chara: CharacterData) {
    const charaName = getCharaName(chara);
    if (charaName.length < 7) {
      return { fontSize: '1.5rem' };
    } else if (charaName.length < 9) {
      return { fontSize: '1.3rem' };
    } else if (charaName.length < 12) {
      return { fontSize: '1.1rem' };
    } else {
      return { fontSize: '.9rem' };
    }
  }

  function calcNamePadding(chara: CharacterData) {
    const charaName = getCharaName(chara);
    if (charaName.length < 7) {
      return { paddingTop: '2px' };
    } else if (charaName.length < 9) {
      return { paddingTop: '5px' };
    } else if (charaName.length < 12) {
      return { paddingTop: '7px' };
    } else {
      return { paddingTop: '10px' };
    }
  }

  return (
    <div id="CardListDashborad" className="row">
      {characterData.map((chara, index) => (
        <div className="column" key={index}>
          <div className={`card ${chara.rarity} ${chara.cardType}`}>
            <div className="card-header">
              <div className="card-type">
                {chara.cardType === CartType.Battle ? (
                  <GiCrossedSwords></GiCrossedSwords>
                ) : null}
                {chara.cardType === CartType.Support ? (
                  <GiLifeSupport></GiLifeSupport>
                ) : null}
              </div>
              <div className="display-name" style={calcNamePadding(chara)}>
                <div className="sub-name">
                  {
                    characterBaseData.filter(
                      base => base.characterId === chara.characterId,
                    )[0].kanaName
                  }
                </div>
                <div className="main-name" style={calcFontSize(chara)}>
                  {getCharaName(chara)}
                </div>
              </div>
            </div>

            <div className="rarity-class">
              <p>{RARITY[chara.rarity]}</p>
            </div>

            <img
              src={`asset/image/character/${chara.fileName}.png`}
              alt="logo"
              width="100%"
            />
          </div>
        </div>
      ))}
      <MonsterCardList></MonsterCardList>
    </div>
  );
};

export default CardListDashborad;
