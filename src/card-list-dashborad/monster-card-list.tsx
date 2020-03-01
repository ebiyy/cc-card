import React, { Fragment } from 'react';
import './card-list-dashborad.scss';
import { MonsterData, MonsterBaseData } from '../constant/character';

const MonsterCardList: React.FC = () => {
  const characterData = MonsterData;
  const characterBaseData = MonsterBaseData;
  return (
    <Fragment>
      {characterData.map((chara, index) => (
        <div className="column" key={index}>
          <div className={`card ${chara.rarity} ${chara.cardType}`}>
            <div className="display-name">
              <div className="sub-name">
                {
                  characterBaseData.filter(
                    base => base.monsterId === chara.monsterId,
                  )[0].kanaName
                }
              </div>
              <div className="main-name">
                {
                  characterBaseData.filter(
                    base => base.monsterId === chara.monsterId,
                  )[0].jaName
                }
              </div>
            </div>

            <img
              src={`asset/image/character/${chara.fileName}.png`}
              alt="logo"
              width="100%"
            />
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default MonsterCardList;
