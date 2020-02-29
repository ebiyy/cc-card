import React from 'react';
import './card-list-dashborad.scss';
import sampleImg from '../asset/img/f354_n.png';
import sampleImg2 from '../asset/img/shinpi_RARE_back.png';
import { CharacterData } from '../constant/character';

const CardListDashborad: React.FC = () => {
  const characterData = CharacterData;
  console.log(characterData);
  return (
    <div id="CardListDashborad" className="row">
      {characterData
        ? characterData.map(obj => (
            <div className="column">
              <div className="card">
                <img
                  src={`asset/image/character/${obj.fileName}.png`}
                  alt="logo"
                  width="100%"
                />
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default CardListDashborad;
