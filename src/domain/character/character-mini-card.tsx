import React, { useState, useEffect } from 'react';
import { allowDrop } from '../../services/drag-and-drop';
import './character-mini-card.scss';
import { CHRACTER_CARDS } from '../../constant/character';
import CardTooltip from './card-tooltip';
import ReactDOM from 'react-dom';
import fitty from 'fitty';
import BattleManager from '../../components/battle-manager';
import { CharacterType } from '../../reducer/character-hp.reducer';

function getRarity(imgId: string) {
  return CHRACTER_CARDS.filter(chara => chara.fileName === imgId)[0].rarity;
}

function resetCartTooltip() {
  console.log('leave');
  const cardTooltipElm = document.getElementById('cardTooltip');
  if (cardTooltipElm) ReactDOM.unmountComponentAtNode(cardTooltipElm);
}

type Props = {
  characterImgId?: string;
  id: CharacterType;
};

const CharacterMiniCard: React.FC<Props> = props => {
  const [characterImgId, setCharacterImgId] = useState<string>();

  function getDropCharacterInfo(ev: any) {
    ev.preventDefault(); // default is not to allow drop
    let dropElmId = ev.dataTransfer.getData('text/plain');
    let characterImgElm = document.getElementById(dropElmId);
    return characterImgElm?.id;
  }

  // TODO:タイミング検討
  useEffect(() => {
    fitty('.sub-name', { minSize: 10, maxSize: 22 });
    fitty('.main-name', { minSize: 10, maxSize: 22 });
  });

  useEffect(() => {
    if (props.characterImgId) {
      setCharacterImgId(props.characterImgId);
    }
  }, [props.characterImgId]);

  return (
    <div
      id={props.id}
      className={`pure-card ${characterImgId ? getRarity(characterImgId) : ''}`}
    >
      {characterImgId ? (
        <img
          src={require(`asset/img/character/${characterImgId}.png`)}
          alt="character-card"
          width="100%"
          onDrop={event => setCharacterImgId(getDropCharacterInfo(event))}
          onDragOver={event => allowDrop(event)}
          onMouseEnter={event => {
            console.log('enter');
            return characterImgId ? CardTooltip(characterImgId, event) : null;
          }}
          onMouseLeave={() => resetCartTooltip()}
        />
      ) : (
        '❶'
      )}
      {characterImgId ? (
        <BattleManager characterImgId={characterImgId} id={props.id} />
      ) : null}
    </div>
  );
};

export default CharacterMiniCard;
