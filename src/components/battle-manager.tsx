import { CHRACTER_CARDS } from '../constant/character';
import React, { useState, useEffect, useContext } from 'react';
import StatusBar from './status-bar';
import AttackAnimation from '../domain/character/attack-animation';
import { AtackAnimationToggleContext } from '../context/attack-animation.context';
import { CharacterType } from '../reducer/character-hp.reducer';

type Props = {
  characterImgId: string;
  id: CharacterType;
};

const coolTimeArray = [10, 5, 1, 20].map(val => val * 1);

const BattleManager: React.FC<Props> = props => {
  const [targets, setTargets] = useState<
    ('monster1' | 'monster2' | 'monster3')[]
  >();
  const [coolTimePerSec, setCoolTimePerSec] = useState<number>();
  const { atackAnimationToggle, setatackAnimationToggle } = useContext(
    AtackAnimationToggleContext,
  );

  function getCoolTimePerSec(characterImgId: string) {
    const characterCard = CHRACTER_CARDS.filter(
      character => character.fileName === characterImgId,
    )[0];
    const coolTimePerSec = coolTimeArray[characterCard.agilities];
    setCoolTimePerSec(coolTimePerSec);
  }

  useEffect(() => {
    if (props.characterImgId) {
      getCoolTimePerSec(props.characterImgId);
    }
  }, [props.characterImgId]);

  return (
    <>
      {/* TODO:一個のコンポネンとへ流してそこでダメージ等計算する */}
      {coolTimePerSec ? (
        <StatusBar
          coolTimePerSec={coolTimePerSec}
          maxHP={100}
          targets={targets}
          setTargets={setTargets}
          characterImgId={props.characterImgId}
          id={props.id}
        />
      ) : null}
      {atackAnimationToggle && targets && coolTimePerSec
        ? targets.map((target, index) => (
            <AttackAnimation
              target={target}
              selfElmId={props.id}
              coolTimePerSec={coolTimePerSec}
              characterImgId={props.characterImgId}
              key={index}
            />
          ))
        : null}
    </>
  );
};

export default BattleManager;
