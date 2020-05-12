import React, { useContext } from 'react';
import { GiCardRandom, GiArrowScope } from 'react-icons/gi';
import { AttackAnimationDispSettingContext } from '../character/attack-animation.context';

type Props = {
  setCardCoiceMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderField: React.FC<Props> = props => {
  const {
    attackAnimationDispSetting,
    setAttackAnimationDispSetting,
  } = useContext(AttackAnimationDispSettingContext);
  return (
    <header style={{ fontSize: '3.5rem' }}>
      <GiCardRandom
        onClick={() => props.setCardCoiceMode(beforState => !beforState)}
      />
      <GiArrowScope
        onClick={() => setAttackAnimationDispSetting(beforState => !beforState)}
      />
    </header>
  );
};

export default HeaderField;
